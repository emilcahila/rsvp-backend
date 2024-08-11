import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { StatusEnum } from "src/enum/status.enum";

export type InviteeDocument = HydratedDocument<Invitee>;

@Schema()
export class Invitee {
	@Prop()
	firstName: string;

	@Prop()
	lastName: string;

	@Prop()
	group: string;

	@Prop({ default: StatusEnum.PENDING })
	status: StatusEnum;
}

export const InviteeSchema = SchemaFactory.createForClass(Invitee);
