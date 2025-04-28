import { AnyCustomFieldConfig, renderReactField } from '@mywave/ui-react'

export const myCustomField: AnyCustomFieldConfig = {
  // name of the custom field as configured in the MyWave conversation
  type: 'my-custom-field',
  // whether the custom field should take up the full width of the interaction
  fullWidthInteraction: false,
  // whether the custom field should hide the MyWave interaction submit button
  hideSubmitButton: false,
  // function to render the custom field
  renderField: renderReactField(
    ({
      // MyWave custom field object
      // contains methods to get data provided to the custom field from MyWave
      field,
      // MyWave UI ref object to render the custom field to
      ref,
    }) => {
      if (!ref.current) {
        return null
      }

      return <div>{field.getId()}</div>
    }
  ),
  // whether the answer should be shown after the user has moved to the next
  // interaction
  showAnswer: true,
  // function which renders the answer to the custom field after the user has
  // moved to the next interaction
  renderAnswer: ({ field, ref }) => {
    return () => {
      if (ref.current) {
        ref.current.innerHTML = field.getAnswer()
      }
    }
  },
  // function to add any custom field validation
  validate: () => true,
  // message to show if the custom field validation fails
  validationMessage: '',
}
