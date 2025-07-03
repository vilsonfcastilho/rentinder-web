export interface IPost {
  id: string
  ownerId: string
  category: string
  title: string
  description: string
  type: string
  doubleBedroom: number
  singleBedroom: number
  bathroom: number
  furnished: boolean
  address: string
  area: string
  city: string
  county: string
  country: string
  eirCode: string
  latitude: number
  longitude: number
  price: number
  photos: string
  active: boolean
  isDeleted: boolean
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}
