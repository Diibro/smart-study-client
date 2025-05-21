export default interface IResponce<Entity>{
     entity: Entity | null,
     info: string  | null,
     error: Error | null,
     code: number
}