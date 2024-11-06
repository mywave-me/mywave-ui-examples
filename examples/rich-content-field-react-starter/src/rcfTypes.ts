export type RCF<DataType> = {
  id: string
  contentType: string
  data: DataType
  isSelected: boolean
}
export type RCFAnswer<DataType> = {
  contentType: string
  data: DataType
}