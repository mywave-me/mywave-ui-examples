import { MyWaveUiOptions } from '@mywave/ui-react'

type RCF<DataType> = {
  id: string
  contentType: string
  data: DataType
  isSelected: boolean
}

type RCFAnswer<DataType> = {
  contentType: string
  data: DataType
}

type Data = {
  id: string
  title: string
  description: string
  price: number
  imageUrl: string
  isSelected: boolean
}

export const myRichContentField: Pick<
  MyWaveUiOptions,
  'renderRichContentFieldAnswer' | 'renderRichContentFieldOption'
> = {
  // function to render the rich content field option
  renderRichContentFieldOption: ({
    // use contentType to identify the rich content field
    contentType,
    // data is the custom object passed to the rich content field
    data,
    // whether the option is selected or not
    isSelected,
  }: RCF<Data>) => {
    if (!data || contentType !== 'productPurchase') {
      return ''
    }

    const cardClassName = isSelected ? 'card selected' : 'card'

    return ` 
            <div>
                <img src=${data.imageUrl} alt="${data.title}" /> 
                <div class=”${cardClassName}”> 
                    <div class=”title”>${data.title}</div> 
                    <div class=”description”>${data.description}</div> 
                    <div class=”price”>${data.price}</div> 
                </div> 
            </div> 
        `
  },
  // function to render the rich content field answer
  renderRichContentFieldAnswer: ({
    // use contentType to identify the rich content field
    contentType,
    // data is the custom object passed to the rich content field
    data,
  }: RCFAnswer<Data>) => {
    if (!data || contentType !== 'productPurchase') {
      return ''
    }

    return ` 
        <div>${data.title} for ${data.price}</div> 
    `
  },
}
