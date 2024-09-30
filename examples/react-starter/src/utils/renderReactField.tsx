import { ReactNode } from 'react'
import { createRoot } from 'react-dom/client'

import { AnyCustomFieldDetails } from '@mywave/ui-react'

type RenderCustomFieldProps = Parameters<
  AnyCustomFieldDetails['renderField']
>[0]

type RenderCustomField = (props: RenderCustomFieldProps) => ReactNode

// We are currently unable to attach a new React tree directly to the MyWave
// custom field ref so need to create a root element to render the custom field
// React tree to. An issue happens between renders of the MyWave UI which
// causes the custom field React tree to lose the reference to MyWave's custom
// field ref.
let rootEl: HTMLDivElement | undefined

/**
 * Allows the rendering of a MyWave Custom Field as React application
 */
export default function renderReactField(
  renderCustomField: RenderCustomField
): AnyCustomFieldDetails['renderField'] {
  return (props) => {
    if (!props.ref.current) return () => {}

    const CustomField = renderCustomField(props)

    // The rootEl needs to be removed if it exists to prevent multiple custom
    // field react trees in the document.
    if (rootEl) {
      rootEl.remove()
    }

    const myWaveRef = props.ref.current
    const rootNode = document.createElement('div')
    const root = createRoot(rootNode)

    root.render(CustomField)

    // Append the rootNode to the myWaveRef and set the rootEl reference.
    myWaveRef.appendChild(rootNode)
    rootEl = rootNode

    return () => {
      root.unmount()
      if (rootNode) {
        rootNode.remove()
      }
      rootEl = undefined
    }
  }
}
