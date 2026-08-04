import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PannesModule } from './pannes/pannes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterielsModule } from './materiels/materiels.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [UsersModule, PannesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'mydb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MaterielsModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
