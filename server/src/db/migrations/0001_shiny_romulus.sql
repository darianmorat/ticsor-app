CREATE TABLE "alphabet_letters" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"letter" char(1) NOT NULL,
	"video_url" varchar
);
--> statement-breakpoint
CREATE TABLE "alphabet_progress" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"letter_id" uuid,
	"completed" boolean DEFAULT false
);
--> statement-breakpoint
ALTER TABLE "alphabet_progress" ADD CONSTRAINT "alphabet_progress_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "alphabet_progress" ADD CONSTRAINT "alphabet_progress_letter_id_alphabet_letters_id_fk" FOREIGN KEY ("letter_id") REFERENCES "public"."alphabet_letters"("id") ON DELETE no action ON UPDATE no action;