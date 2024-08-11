import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Invitee } from "./schemas/invitee";
import { StatusEnum } from "src/enum/status.enum";

@Injectable()
export class InviteeService {
	constructor(
		@InjectModel(Invitee.name) private inviteeModel: Model<Invitee>,
	) {}

	async create(createInviteeDTO: any): Promise<Invitee> {
		if (![Object.values(StatusEnum)].includes(createInviteeDTO.status)) {
			createInviteeDTO.status = StatusEnum.PENDING;
		}
		const createdCat = new this.inviteeModel(createInviteeDTO);
		return createdCat.save();
	}

	async findAll(): Promise<Invitee[]> {
		return this.inviteeModel.find().exec();
	}

	async findGroupInvitees(group: string): Promise<Invitee[]> {
		return this.inviteeModel.find({ group }).exec();
	}
}
