import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo'; // Corrected import

@Module({
  imports: [
    // GraphQL setup using ApolloDriver
    GraphQLModule.forRoot({
      driver: ApolloDriver, // Set Apollo as the GraphQL driver
      autoSchemaFile: true, // Auto-generate the GraphQL schema
      playground: true, // Enable GraphQL Playground for testing
    }),
  ],
})
export class AppModule {}
