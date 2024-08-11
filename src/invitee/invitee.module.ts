import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Invitee, InviteeSchema } from "./schemas/invitee";
import { InviteeService } from "./invitee.service";
import { InviteeController } from "./invitee.controller";

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Invitee.name, schema: InviteeSchema }]),
	],
	controllers: [InviteeController],
	providers: [InviteeService],
})
export class InviteeModule {}
