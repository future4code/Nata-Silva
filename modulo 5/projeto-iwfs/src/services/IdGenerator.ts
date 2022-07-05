import { v4 } from "uuid"

export class IdGenerator {
    public genetate(): string {
        return v4()
    }
}