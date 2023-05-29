CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `firstName` varchar(255),
  `lastName` varchar(255),
  `dateBirth` date,
  `state` varchar(255),
  `country` varchar(255),
  `active` Boolean,
  `email` varchar(255),
  `password` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `authors` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `description` varchar(255),
  `year` varchar(255),
  `photo` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `editor` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `description` varchar(255),
  `year` varchar(255),
  `photo` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `category` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `description` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `comics` (
  `id` integer PRIMARY KEY,
  `title` varchar(255),
  `description` text,
  `status` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `episode` (
  `id` integer PRIMARY KEY,
  `title` varchar(255),
  `description` text,
  `status` varchar(255),
  `created_at` timestamp
);
