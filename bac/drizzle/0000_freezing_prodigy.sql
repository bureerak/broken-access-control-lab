CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`email` text,
	`password` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);