import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_contacts_case_match" AS ENUM('commercial_vehicle', 'rideshare', 'catastrophic', 'wrongful_death', 'medical_malpractice');
  CREATE TYPE "public"."enum_contacts_urgency_tier" AS ENUM('urgent', 'standard', 'administrative');
  CREATE TABLE "contacts_case_match" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_contacts_case_match",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  ALTER TABLE "contacts" ADD COLUMN "urgency_tier" "enum_contacts_urgency_tier" DEFAULT 'standard';
  ALTER TABLE "contacts_case_match" ADD CONSTRAINT "contacts_case_match_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "contacts_case_match_order_idx" ON "contacts_case_match" USING btree ("order");
  CREATE INDEX "contacts_case_match_parent_idx" ON "contacts_case_match" USING btree ("parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "contacts_case_match" CASCADE;
  ALTER TABLE "contacts" DROP COLUMN "urgency_tier";
  DROP TYPE "public"."enum_contacts_case_match";
  DROP TYPE "public"."enum_contacts_urgency_tier";`)
}
