CREATE TABLE "lenders" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text,
	CONSTRAINT "lenders_name_unique" UNIQUE("name")
);
