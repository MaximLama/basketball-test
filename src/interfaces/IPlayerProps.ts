export default interface IPlayerProps {
  name: string,
  position: string,
  image: string,
  number: number,
  height: number,
  weight: number,
  age: number,
}

export interface IPlayerDetailProps extends IPlayerProps {
  team: string
}