import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      cors: {
        origin: '*', // Allow all origins for development (not recommended for production)
        credentials: true,
      },
      csrfPrevention: false, // Disable CSRF prevention
    }),
  ],
  providers: [AppResolver],
})
export class AppModule {}
