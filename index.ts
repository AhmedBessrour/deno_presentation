import { DynamoDBClient, ListTablesCommand } from "https://deno.land/x/aws_sdk@v3.8.0.0/client-dynamodb/mod.ts";


(async () => {
  const client = new DynamoDBClient({ region: "eu-west-3" });
  const command = new ListTablesCommand({});
  try {
    const results = await client.send(command);
    console.log(results.TableNames);
  } catch (err) {
    console.error(err);
  }
})();