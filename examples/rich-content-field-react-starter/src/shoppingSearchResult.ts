export type Data = {
    id: string
    title: string
    description: string
    price: number
    imageUrl: string
    isSelected: boolean
  }

export const shoppingSearchResult = ({ 
    title, 
    description, 
    price, 
    imageUrl, 
    isSelected, 
    }: Data) => {

        const cardClassName = isSelected ? 'card selected' : 'card'
    
        return ` 
            <div>
                <img src=${imageUrl} alt="${title}" /> 
                <div class=”${cardClassName}”> 
                    <div class=”title”>${title}</div> 
                    <div class=”description”>${description}</div> 
                    <div class=”price”>${price}</div> 
                </div> 
            </div> 
        ` 
    } 

export const shoppingSearchResultAnswer = ( answer: Data) => { 
    return ` 
        <div>${answer.title} for ${answer.price}</div> 
    `     
} 