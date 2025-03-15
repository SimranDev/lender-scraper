CREATE TABLE "rates" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product_id" uuid NOT NULL,
	"recorded_at" timestamp DEFAULT now() NOT NULL,
	"variable_floating" numeric(5, 2),
	"six_months" numeric(5, 2),
	"one_year" numeric(5, 2),
	"two_years" numeric(5, 2),
	"three_years" numeric(5, 2),
	"four_years" numeric(5, 2),
	"five_years" numeric(5, 2),
	"special_term" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "products" DROP CONSTRAINT "products_lender_id_lenders_id_fk";
--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "rates" ADD CONSTRAINT "rates_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_lender_id_lenders_id_fk" FOREIGN KEY ("lender_id") REFERENCES "public"."lenders"("id") ON DELETE cascade ON UPDATE no action;