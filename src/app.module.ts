import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { InviteeModule } from "./invitee/invitee.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ".env",
			isGlobal: true,
		}),
		MongooseModule.forRoot(process.env.MONGODB_URL, {
			dbName: "rsvp",
		}),
		InviteeModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
