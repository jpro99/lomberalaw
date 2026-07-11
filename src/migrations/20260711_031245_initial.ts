import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_contacts_referral_source" AS ENUM('search', 'referral_personal', 'referral_attorney', 'maps', 'social', 'website', 'other');
  ALTER TABLE "contacts" ADD COLUMN "referral_source" "enum_contacts_referral_source";
  ALTER TABLE "contacts" ADD COLUMN "referral_source_detail" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contacts" DROP COLUMN "referral_source";
  ALTER TABLE "contacts" DROP COLUMN "referral_source_detail";
  DROP TYPE "public"."enum_contacts_referral_source";`)
}
