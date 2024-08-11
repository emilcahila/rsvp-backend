import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { InviteeService } from "./invitee.service";
import { Invitee } from "./schemas/invitee";

@Controller("invitee")
export class InviteeController {
	constructor(private readonly inviteeService: InviteeService) {}

	@Post()
	async create(@Body() createCatDto: any) {
		await this.inviteeService.create(createCatDto);
	}

	@Get()
	async findAll(): Promise<Invitee[]> {
		return this.inviteeService.findAll();
	}

	@Get(":group")
	async findGroupInvitees(@Param("group") group: any): Promise<Invitee[]> {
		return this.inviteeService.findGroupInvitees(group);
	}
}
