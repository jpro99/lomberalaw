import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'es');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor');
  CREATE TYPE "public"."enum_cities_county" AS ENUM('San Bernardino County', 'Riverside County');
  CREATE TYPE "public"."enum_service_city_pages_tier" AS ENUM('tier1', 'tier2');
  CREATE TYPE "public"."enum_attorneys_languages" AS ENUM('English', 'Spanish');
  CREATE TYPE "public"."enum_testimonials_source" AS ENUM('Google', 'Facebook', 'Direct');
  CREATE TYPE "public"."enum_cta_variants_action" AS ENUM('call', 'form', 'link');
  CREATE TYPE "public"."enum_redirects_type" AS ENUM('301', '302');
  CREATE TYPE "public"."enum_contacts_preferred_contact_method" AS ENUM('phone', 'sms', 'email');
  CREATE TYPE "public"."enum_contacts_language_preference" AS ENUM('en', 'es');
  CREATE TYPE "public"."enum_contacts_intake_status" AS ENUM('new', 'contacted', 'consult_scheduled', 'consult_completed', 'client', 'declined');
  CREATE TYPE "public"."enum_contacts_source" AS ENUM('website_form', 'call', 'chat', 'sms', 'referral');
  CREATE TYPE "public"."enum_events_type" AS ENUM('page_visit', 'cta_click', 'form_start', 'form_abandon', 'call', 'sms', 'chat_session', 'booking_attempt', 'booked_consult', 'intake_milestone');
  CREATE TYPE "public"."enum_episodes_tag" AS ENUM('repeated_interest', 'form_abandon', 'after_hours_request', 'contact_preference', 'converted', 'other');
  CREATE TYPE "public"."enum_episodes_created_by" AS ENUM('system_rule', 'staff');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"role" "enum_users_role" DEFAULT 'editor' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"focal_point" geometry(Point),
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_hero_url" varchar,
  	"sizes_hero_width" numeric,
  	"sizes_hero_height" numeric,
  	"sizes_hero_mime_type" varchar,
  	"sizes_hero_filesize" numeric,
  	"sizes_hero_filename" varchar
  );
  
  CREATE TABLE "media_locales" (
  	"alt" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "offices" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"address" varchar NOT NULL,
  	"geo" geometry(Point),
  	"map_embed_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "offices_locales" (
  	"hours" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "practice_areas" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"hero_image_id" integer,
  	"hero_c_t_a_id" integer,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "practice_areas_locales" (
  	"name" varchar NOT NULL,
  	"intro" varchar,
  	"body" jsonb,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"practice_area_id" integer NOT NULL,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "services_locales" (
  	"title" varchar NOT NULL,
  	"summary" varchar,
  	"body" jsonb,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "services_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"faqs_id" integer
  );
  
  CREATE TABLE "cities_hospitals" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "cities_highways" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "cities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"county" "enum_cities_county" NOT NULL,
  	"serving_office_id" integer,
  	"geo" geometry(Point),
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "cities_locales" (
  	"name" varchar NOT NULL,
  	"courthouse" varchar,
  	"local_intro" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "cities_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"cities_id" integer
  );
  
  CREATE TABLE "service_city_pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"service_id" integer NOT NULL,
  	"city_id" integer NOT NULL,
  	"tier" "enum_service_city_pages_tier" DEFAULT 'tier2' NOT NULL,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "service_city_pages_locales" (
  	"title" varchar,
  	"local_body" jsonb,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "service_city_pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"testimonials_id" integer
  );
  
  CREATE TABLE "attorneys_credentials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar
  );
  
  CREATE TABLE "attorneys_languages" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_attorneys_languages",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "attorneys" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"photo_id" integer,
  	"bar_number" varchar,
  	"years_practicing" numeric,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "attorneys_locales" (
  	"bio" jsonb,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "attorneys_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer
  );
  
  CREATE TABLE "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"author" varchar NOT NULL,
  	"rating" numeric DEFAULT 5,
  	"practice_area_id" integer,
  	"city_id" integer,
  	"source" "enum_testimonials_source" DEFAULT 'Google',
  	"featured" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "testimonials_locales" (
  	"quote" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "faqs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_on_general_f_a_q_page" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "faqs_locales" (
  	"question" varchar NOT NULL,
  	"answer" jsonb NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "faqs_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"cities_id" integer
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"cover_image_id" integer,
  	"author_id" integer,
  	"published_at" timestamp(3) with time zone,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "posts_locales" (
  	"title" varchar NOT NULL,
  	"excerpt" varchar,
  	"body" jsonb,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer
  );
  
  CREATE TABLE "cta_variants" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"action" "enum_cta_variants_action" NOT NULL,
  	"link_href" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "cta_variants_locales" (
  	"headline" varchar,
  	"button_text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to" varchar NOT NULL,
  	"type" "enum_redirects_type" DEFAULT '301' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "contacts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"full_name" varchar,
  	"email" varchar,
  	"phone" varchar,
  	"preferred_contact_method" "enum_contacts_preferred_contact_method",
  	"language_preference" "enum_contacts_language_preference",
  	"city_id" integer,
  	"intake_status" "enum_contacts_intake_status" DEFAULT 'new',
  	"prior_consultation_status" boolean DEFAULT false,
  	"explicit_preferences" varchar,
  	"source" "enum_contacts_source",
  	"sms_consent" boolean DEFAULT false,
  	"sms_consent_timestamp" timestamp(3) with time zone,
  	"marketing_consent" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "contacts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"practice_areas_id" integer
  );
  
  CREATE TABLE "events" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum_events_type" NOT NULL,
  	"path" varchar,
  	"session_id" varchar,
  	"contact_id" integer,
  	"metadata" jsonb,
  	"occurred_at" timestamp(3) with time zone NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "episodes" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"contact_id" integer NOT NULL,
  	"summary" varchar NOT NULL,
  	"tag" "enum_episodes_tag" NOT NULL,
  	"created_by" "enum_episodes_created_by" DEFAULT 'system_rule' NOT NULL,
  	"reviewed" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "episodes_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"events_id" integer
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"offices_id" integer,
  	"practice_areas_id" integer,
  	"services_id" integer,
  	"cities_id" integer,
  	"service_city_pages_id" integer,
  	"attorneys_id" integer,
  	"testimonials_id" integer,
  	"faqs_id" integer,
  	"posts_id" integer,
  	"cta_variants_id" integer,
  	"redirects_id" integer,
  	"contacts_id" integer,
  	"events_id" integer,
  	"episodes_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"default_og_image_id" integer,
  	"google_review_url" varchar,
  	"facebook_url" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_settings_locales" (
  	"firm_name" varchar DEFAULT 'Law Offices of Edgar P. Lombera',
  	"default_meta_title" varchar,
  	"default_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "main_navigation_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "main_navigation_header_links_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "main_navigation_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "main_navigation_footer_links_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "main_navigation" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media_locales" ADD CONSTRAINT "media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "offices_locales" ADD CONSTRAINT "offices_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."offices"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "practice_areas" ADD CONSTRAINT "practice_areas_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "practice_areas" ADD CONSTRAINT "practice_areas_hero_c_t_a_id_cta_variants_id_fk" FOREIGN KEY ("hero_c_t_a_id") REFERENCES "public"."cta_variants"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "practice_areas_locales" ADD CONSTRAINT "practice_areas_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."practice_areas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_practice_area_id_practice_areas_id_fk" FOREIGN KEY ("practice_area_id") REFERENCES "public"."practice_areas"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_locales" ADD CONSTRAINT "services_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cities_hospitals" ADD CONSTRAINT "cities_hospitals_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cities_highways" ADD CONSTRAINT "cities_highways_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cities" ADD CONSTRAINT "cities_serving_office_id_offices_id_fk" FOREIGN KEY ("serving_office_id") REFERENCES "public"."offices"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cities_locales" ADD CONSTRAINT "cities_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cities_rels" ADD CONSTRAINT "cities_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cities_rels" ADD CONSTRAINT "cities_rels_cities_fk" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "service_city_pages" ADD CONSTRAINT "service_city_pages_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "service_city_pages" ADD CONSTRAINT "service_city_pages_city_id_cities_id_fk" FOREIGN KEY ("city_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "service_city_pages_locales" ADD CONSTRAINT "service_city_pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."service_city_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "service_city_pages_rels" ADD CONSTRAINT "service_city_pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."service_city_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "service_city_pages_rels" ADD CONSTRAINT "service_city_pages_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "attorneys_credentials" ADD CONSTRAINT "attorneys_credentials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."attorneys"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "attorneys_languages" ADD CONSTRAINT "attorneys_languages_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."attorneys"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "attorneys" ADD CONSTRAINT "attorneys_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "attorneys_locales" ADD CONSTRAINT "attorneys_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."attorneys"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "attorneys_rels" ADD CONSTRAINT "attorneys_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."attorneys"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "attorneys_rels" ADD CONSTRAINT "attorneys_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_practice_area_id_practice_areas_id_fk" FOREIGN KEY ("practice_area_id") REFERENCES "public"."practice_areas"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_city_id_cities_id_fk" FOREIGN KEY ("city_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials_locales" ADD CONSTRAINT "testimonials_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faqs_locales" ADD CONSTRAINT "faqs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faqs_rels" ADD CONSTRAINT "faqs_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faqs_rels" ADD CONSTRAINT "faqs_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faqs_rels" ADD CONSTRAINT "faqs_rels_cities_fk" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_attorneys_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."attorneys"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cta_variants_locales" ADD CONSTRAINT "cta_variants_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cta_variants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contacts" ADD CONSTRAINT "contacts_city_id_cities_id_fk" FOREIGN KEY ("city_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contacts_rels" ADD CONSTRAINT "contacts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contacts_rels" ADD CONSTRAINT "contacts_rels_practice_areas_fk" FOREIGN KEY ("practice_areas_id") REFERENCES "public"."practice_areas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_contact_id_contacts_id_fk" FOREIGN KEY ("contact_id") REFERENCES "public"."contacts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "episodes" ADD CONSTRAINT "episodes_contact_id_contacts_id_fk" FOREIGN KEY ("contact_id") REFERENCES "public"."contacts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "episodes_rels" ADD CONSTRAINT "episodes_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."episodes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "episodes_rels" ADD CONSTRAINT "episodes_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_offices_fk" FOREIGN KEY ("offices_id") REFERENCES "public"."offices"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_practice_areas_fk" FOREIGN KEY ("practice_areas_id") REFERENCES "public"."practice_areas"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_cities_fk" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_service_city_pages_fk" FOREIGN KEY ("service_city_pages_id") REFERENCES "public"."service_city_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_attorneys_fk" FOREIGN KEY ("attorneys_id") REFERENCES "public"."attorneys"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_cta_variants_fk" FOREIGN KEY ("cta_variants_id") REFERENCES "public"."cta_variants"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contacts_fk" FOREIGN KEY ("contacts_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_episodes_fk" FOREIGN KEY ("episodes_id") REFERENCES "public"."episodes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_default_og_image_id_media_id_fk" FOREIGN KEY ("default_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings_locales" ADD CONSTRAINT "site_settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "main_navigation_header_links" ADD CONSTRAINT "main_navigation_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."main_navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "main_navigation_header_links_locales" ADD CONSTRAINT "main_navigation_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."main_navigation_header_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "main_navigation_footer_links" ADD CONSTRAINT "main_navigation_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."main_navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "main_navigation_footer_links_locales" ADD CONSTRAINT "main_navigation_footer_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."main_navigation_footer_links"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");
  CREATE UNIQUE INDEX "media_locales_locale_parent_id_unique" ON "media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "offices_updated_at_idx" ON "offices" USING btree ("updated_at");
  CREATE INDEX "offices_created_at_idx" ON "offices" USING btree ("created_at");
  CREATE UNIQUE INDEX "offices_locales_locale_parent_id_unique" ON "offices_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "practice_areas_slug_idx" ON "practice_areas" USING btree ("slug");
  CREATE INDEX "practice_areas_hero_image_idx" ON "practice_areas" USING btree ("hero_image_id");
  CREATE INDEX "practice_areas_hero_c_t_a_idx" ON "practice_areas" USING btree ("hero_c_t_a_id");
  CREATE INDEX "practice_areas_updated_at_idx" ON "practice_areas" USING btree ("updated_at");
  CREATE INDEX "practice_areas_created_at_idx" ON "practice_areas" USING btree ("created_at");
  CREATE UNIQUE INDEX "practice_areas_locales_locale_parent_id_unique" ON "practice_areas_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "services_practice_area_idx" ON "services" USING btree ("practice_area_id");
  CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE UNIQUE INDEX "services_locales_locale_parent_id_unique" ON "services_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "services_rels_order_idx" ON "services_rels" USING btree ("order");
  CREATE INDEX "services_rels_parent_idx" ON "services_rels" USING btree ("parent_id");
  CREATE INDEX "services_rels_path_idx" ON "services_rels" USING btree ("path");
  CREATE INDEX "services_rels_faqs_id_idx" ON "services_rels" USING btree ("faqs_id");
  CREATE INDEX "cities_hospitals_order_idx" ON "cities_hospitals" USING btree ("_order");
  CREATE INDEX "cities_hospitals_parent_id_idx" ON "cities_hospitals" USING btree ("_parent_id");
  CREATE INDEX "cities_highways_order_idx" ON "cities_highways" USING btree ("_order");
  CREATE INDEX "cities_highways_parent_id_idx" ON "cities_highways" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "cities_slug_idx" ON "cities" USING btree ("slug");
  CREATE INDEX "cities_serving_office_idx" ON "cities" USING btree ("serving_office_id");
  CREATE INDEX "cities_updated_at_idx" ON "cities" USING btree ("updated_at");
  CREATE INDEX "cities_created_at_idx" ON "cities" USING btree ("created_at");
  CREATE UNIQUE INDEX "cities_locales_locale_parent_id_unique" ON "cities_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "cities_rels_order_idx" ON "cities_rels" USING btree ("order");
  CREATE INDEX "cities_rels_parent_idx" ON "cities_rels" USING btree ("parent_id");
  CREATE INDEX "cities_rels_path_idx" ON "cities_rels" USING btree ("path");
  CREATE INDEX "cities_rels_cities_id_idx" ON "cities_rels" USING btree ("cities_id");
  CREATE INDEX "service_city_pages_service_idx" ON "service_city_pages" USING btree ("service_id");
  CREATE INDEX "service_city_pages_city_idx" ON "service_city_pages" USING btree ("city_id");
  CREATE INDEX "service_city_pages_updated_at_idx" ON "service_city_pages" USING btree ("updated_at");
  CREATE INDEX "service_city_pages_created_at_idx" ON "service_city_pages" USING btree ("created_at");
  CREATE UNIQUE INDEX "service_city_pages_locales_locale_parent_id_unique" ON "service_city_pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "service_city_pages_rels_order_idx" ON "service_city_pages_rels" USING btree ("order");
  CREATE INDEX "service_city_pages_rels_parent_idx" ON "service_city_pages_rels" USING btree ("parent_id");
  CREATE INDEX "service_city_pages_rels_path_idx" ON "service_city_pages_rels" USING btree ("path");
  CREATE INDEX "service_city_pages_rels_testimonials_id_idx" ON "service_city_pages_rels" USING btree ("testimonials_id");
  CREATE INDEX "attorneys_credentials_order_idx" ON "attorneys_credentials" USING btree ("_order");
  CREATE INDEX "attorneys_credentials_parent_id_idx" ON "attorneys_credentials" USING btree ("_parent_id");
  CREATE INDEX "attorneys_languages_order_idx" ON "attorneys_languages" USING btree ("order");
  CREATE INDEX "attorneys_languages_parent_idx" ON "attorneys_languages" USING btree ("parent_id");
  CREATE UNIQUE INDEX "attorneys_slug_idx" ON "attorneys" USING btree ("slug");
  CREATE INDEX "attorneys_photo_idx" ON "attorneys" USING btree ("photo_id");
  CREATE INDEX "attorneys_updated_at_idx" ON "attorneys" USING btree ("updated_at");
  CREATE INDEX "attorneys_created_at_idx" ON "attorneys" USING btree ("created_at");
  CREATE UNIQUE INDEX "attorneys_locales_locale_parent_id_unique" ON "attorneys_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "attorneys_rels_order_idx" ON "attorneys_rels" USING btree ("order");
  CREATE INDEX "attorneys_rels_parent_idx" ON "attorneys_rels" USING btree ("parent_id");
  CREATE INDEX "attorneys_rels_path_idx" ON "attorneys_rels" USING btree ("path");
  CREATE INDEX "attorneys_rels_services_id_idx" ON "attorneys_rels" USING btree ("services_id");
  CREATE INDEX "testimonials_practice_area_idx" ON "testimonials" USING btree ("practice_area_id");
  CREATE INDEX "testimonials_city_idx" ON "testimonials" USING btree ("city_id");
  CREATE INDEX "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  CREATE UNIQUE INDEX "testimonials_locales_locale_parent_id_unique" ON "testimonials_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "faqs_updated_at_idx" ON "faqs" USING btree ("updated_at");
  CREATE INDEX "faqs_created_at_idx" ON "faqs" USING btree ("created_at");
  CREATE UNIQUE INDEX "faqs_locales_locale_parent_id_unique" ON "faqs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "faqs_rels_order_idx" ON "faqs_rels" USING btree ("order");
  CREATE INDEX "faqs_rels_parent_idx" ON "faqs_rels" USING btree ("parent_id");
  CREATE INDEX "faqs_rels_path_idx" ON "faqs_rels" USING btree ("path");
  CREATE INDEX "faqs_rels_services_id_idx" ON "faqs_rels" USING btree ("services_id");
  CREATE INDEX "faqs_rels_cities_id_idx" ON "faqs_rels" USING btree ("cities_id");
  CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_cover_image_idx" ON "posts" USING btree ("cover_image_id");
  CREATE INDEX "posts_author_idx" ON "posts" USING btree ("author_id");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE UNIQUE INDEX "posts_locales_locale_parent_id_unique" ON "posts_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX "posts_rels_services_id_idx" ON "posts_rels" USING btree ("services_id");
  CREATE INDEX "cta_variants_updated_at_idx" ON "cta_variants" USING btree ("updated_at");
  CREATE INDEX "cta_variants_created_at_idx" ON "cta_variants" USING btree ("created_at");
  CREATE UNIQUE INDEX "cta_variants_locales_locale_parent_id_unique" ON "cta_variants_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "contacts_city_idx" ON "contacts" USING btree ("city_id");
  CREATE INDEX "contacts_updated_at_idx" ON "contacts" USING btree ("updated_at");
  CREATE INDEX "contacts_created_at_idx" ON "contacts" USING btree ("created_at");
  CREATE INDEX "contacts_rels_order_idx" ON "contacts_rels" USING btree ("order");
  CREATE INDEX "contacts_rels_parent_idx" ON "contacts_rels" USING btree ("parent_id");
  CREATE INDEX "contacts_rels_path_idx" ON "contacts_rels" USING btree ("path");
  CREATE INDEX "contacts_rels_practice_areas_id_idx" ON "contacts_rels" USING btree ("practice_areas_id");
  CREATE INDEX "events_contact_idx" ON "events" USING btree ("contact_id");
  CREATE INDEX "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX "events_created_at_idx" ON "events" USING btree ("created_at");
  CREATE INDEX "episodes_contact_idx" ON "episodes" USING btree ("contact_id");
  CREATE INDEX "episodes_updated_at_idx" ON "episodes" USING btree ("updated_at");
  CREATE INDEX "episodes_created_at_idx" ON "episodes" USING btree ("created_at");
  CREATE INDEX "episodes_rels_order_idx" ON "episodes_rels" USING btree ("order");
  CREATE INDEX "episodes_rels_parent_idx" ON "episodes_rels" USING btree ("parent_id");
  CREATE INDEX "episodes_rels_path_idx" ON "episodes_rels" USING btree ("path");
  CREATE INDEX "episodes_rels_events_id_idx" ON "episodes_rels" USING btree ("events_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_offices_id_idx" ON "payload_locked_documents_rels" USING btree ("offices_id");
  CREATE INDEX "payload_locked_documents_rels_practice_areas_id_idx" ON "payload_locked_documents_rels" USING btree ("practice_areas_id");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_cities_id_idx" ON "payload_locked_documents_rels" USING btree ("cities_id");
  CREATE INDEX "payload_locked_documents_rels_service_city_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("service_city_pages_id");
  CREATE INDEX "payload_locked_documents_rels_attorneys_id_idx" ON "payload_locked_documents_rels" USING btree ("attorneys_id");
  CREATE INDEX "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");
  CREATE INDEX "payload_locked_documents_rels_faqs_id_idx" ON "payload_locked_documents_rels" USING btree ("faqs_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_cta_variants_id_idx" ON "payload_locked_documents_rels" USING btree ("cta_variants_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_locked_documents_rels_contacts_id_idx" ON "payload_locked_documents_rels" USING btree ("contacts_id");
  CREATE INDEX "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
  CREATE INDEX "payload_locked_documents_rels_episodes_id_idx" ON "payload_locked_documents_rels" USING btree ("episodes_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "site_settings_default_og_image_idx" ON "site_settings" USING btree ("default_og_image_id");
  CREATE UNIQUE INDEX "site_settings_locales_locale_parent_id_unique" ON "site_settings_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "main_navigation_header_links_order_idx" ON "main_navigation_header_links" USING btree ("_order");
  CREATE INDEX "main_navigation_header_links_parent_id_idx" ON "main_navigation_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "main_navigation_header_links_locales_locale_parent_id_unique" ON "main_navigation_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "main_navigation_footer_links_order_idx" ON "main_navigation_footer_links" USING btree ("_order");
  CREATE INDEX "main_navigation_footer_links_parent_id_idx" ON "main_navigation_footer_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "main_navigation_footer_links_locales_locale_parent_id_unique" ON "main_navigation_footer_links_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "media_locales" CASCADE;
  DROP TABLE "offices" CASCADE;
  DROP TABLE "offices_locales" CASCADE;
  DROP TABLE "practice_areas" CASCADE;
  DROP TABLE "practice_areas_locales" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "services_locales" CASCADE;
  DROP TABLE "services_rels" CASCADE;
  DROP TABLE "cities_hospitals" CASCADE;
  DROP TABLE "cities_highways" CASCADE;
  DROP TABLE "cities" CASCADE;
  DROP TABLE "cities_locales" CASCADE;
  DROP TABLE "cities_rels" CASCADE;
  DROP TABLE "service_city_pages" CASCADE;
  DROP TABLE "service_city_pages_locales" CASCADE;
  DROP TABLE "service_city_pages_rels" CASCADE;
  DROP TABLE "attorneys_credentials" CASCADE;
  DROP TABLE "attorneys_languages" CASCADE;
  DROP TABLE "attorneys" CASCADE;
  DROP TABLE "attorneys_locales" CASCADE;
  DROP TABLE "attorneys_rels" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  DROP TABLE "testimonials_locales" CASCADE;
  DROP TABLE "faqs" CASCADE;
  DROP TABLE "faqs_locales" CASCADE;
  DROP TABLE "faqs_rels" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_locales" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "cta_variants" CASCADE;
  DROP TABLE "cta_variants_locales" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "contacts" CASCADE;
  DROP TABLE "contacts_rels" CASCADE;
  DROP TABLE "events" CASCADE;
  DROP TABLE "episodes" CASCADE;
  DROP TABLE "episodes_rels" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "site_settings_locales" CASCADE;
  DROP TABLE "main_navigation_header_links" CASCADE;
  DROP TABLE "main_navigation_header_links_locales" CASCADE;
  DROP TABLE "main_navigation_footer_links" CASCADE;
  DROP TABLE "main_navigation_footer_links_locales" CASCADE;
  DROP TABLE "main_navigation" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_cities_county";
  DROP TYPE "public"."enum_service_city_pages_tier";
  DROP TYPE "public"."enum_attorneys_languages";
  DROP TYPE "public"."enum_testimonials_source";
  DROP TYPE "public"."enum_cta_variants_action";
  DROP TYPE "public"."enum_redirects_type";
  DROP TYPE "public"."enum_contacts_preferred_contact_method";
  DROP TYPE "public"."enum_contacts_language_preference";
  DROP TYPE "public"."enum_contacts_intake_status";
  DROP TYPE "public"."enum_contacts_source";
  DROP TYPE "public"."enum_events_type";
  DROP TYPE "public"."enum_episodes_tag";
  DROP TYPE "public"."enum_episodes_created_by";`)
}
