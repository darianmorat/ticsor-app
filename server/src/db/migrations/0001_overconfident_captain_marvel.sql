ALTER TABLE "alphabet" ALTER COLUMN "video_url" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "lessons" ALTER COLUMN "order" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "lessons" ALTER COLUMN "type" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "alphabet_progress" DROP COLUMN "completed";--> statement-breakpoint
ALTER TABLE "lesson_progress" DROP COLUMN "completed";