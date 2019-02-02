-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 02, 2019 at 08:33 PM
-- Server version: 5.7.25-0ubuntu0.18.04.2
-- PHP Version: 7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mikle94h_theater`
--

-- --------------------------------------------------------

--
-- Table structure for table `actors`
--

CREATE TABLE `actors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `secname` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `actors`
--

INSERT INTO `actors` (`id`, `name`, `secname`, `role`, `img`) VALUES
(406264, 'Они', 'будут', 'Но позже', '/images/gallery/168a8495d67.jpg'),
(406265, 'Актеров', 'нет', 'Но вы держитесь', '/images/gallery/168a846ba98.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `many_news_has_many_media`
--

CREATE TABLE `many_news_has_many_media` (
  `news` bigint(20) UNSIGNED NOT NULL,
  `media` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `type_of` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `img`, `type_of`) VALUES
(2, '/images/gallery/gallery3.jpg', 'gallery'),
(7, '/images/gallery/gallery8.jpg', 'gallery'),
(8, '/images/gallery/gallery9.jpg', 'gallery'),
(21, '/images/gallery/1688bdd4f3a.jpg', 'gallery'),
(30, '/images/gallery/1688f9d532b.jpg', 'gallery'),
(31, '/images/gallery/168901c5e33.jpg', 'gallery'),
(46, '/images/gallery/168a846ba98.jpg', 'actor'),
(47, '/images/gallery/168a8495d67.jpg', 'actor'),
(58, '/images/gallery/168a9f1e326.jpg', 'news'),
(59, '/images/gallery/168aa91ab4b.jpg', 'news'),
(60, '/images/gallery/168aa99b86e.jpg', 'news'),
(61, '/images/gallery/168aa9ffbf0.jpg', 'news'),
(62, '/images/gallery/168aaa97d1d.jpg', 'news'),
(64, '/images/gallery/168aab092e2.jpg', 'news'),
(65, '/images/gallery/168aabe5a20.jpg', 'news'),
(66, '/images/gallery/168aac3fc8c.jpg', 'news'),
(67, '/images/gallery/168aacc1786.jpg', 'gallery'),
(68, '/images/gallery/168aacc559f.jpg', 'gallery'),
(69, '/images/gallery/168aacc7b11.jpg', 'gallery'),
(70, '/images/gallery/168aacc93c3.jpg', 'gallery'),
(71, '/images/gallery/168aaccd956.png', 'gallery'),
(72, '/images/gallery/168aacd2944.jpg', 'gallery');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `time` varchar(5) NOT NULL DEFAULT '19:00',
  `duration` varchar(32) NOT NULL DEFAULT '3 часа',
  `place` varchar(255) NOT NULL DEFAULT 'None',
  `producer` varchar(255) NOT NULL DEFAULT 'Наталья Богач',
  `choreographer` varchar(255) NOT NULL,
  `actors` text NOT NULL,
  `title` varchar(64) NOT NULL,
  `author` varchar(255) NOT NULL DEFAULT 'Уильям Шекспир',
  `img` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `fav` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `date`, `time`, `duration`, `place`, `producer`, `choreographer`, `actors`, `title`, `author`, `img`, `text`, `fav`) VALUES
(784908, '2015-05-03', '19:00', '~ 3 часа', 'На сцене Студенческого клуба Политех на Лесной ул.Парголовская д.11/2', 'Суховский А.Р.', 'Суховский А.Р.', 'Дети детей', 'Повелитель мух', 'Уильям Голдинг', '/images/gallery/168aaa97d1d.jpg', 'Дебютный аллегорический роман английского писателя, лауреата Нобелевской премии по литературе, Уильяма Голдинга, вышедший в 1954 году. В СССР на русском языке роман был впервые опубликован в 1969 году в пяти номерах журнала «Вокруг света» в переводе Владимира Тельникова, который после этого больше не издавался, а отдельной книгой роман начал издаваться только с 1981 года в переводе Елены Суриц.', 0),
(784912, '2019-01-10', '19:00', '7 часов', 'Twitch', 'Апостол', 'Борис Кагарлицкий', 'Ольгерд Семенов, Михаил Утопиан, Александр Даниелян', 'Спектакль памяти Маргинала', 'Ежи Сармат', '/images/gallery/168aabe5a20.jpg', 'Он ушел в постмодерн и не вернулся.', 0),
(784913, '2019-02-01', '22:55', '3 часа', 'Канада))', 'Ваше воображение', 'Красный карлик', 'Малыш и Карлсон, Ансамбль одурманенные зрители', 'Малыш и Карлсон', 'Астрид Линдгрен', '/images/gallery/168aa9ffbf0.jpg', 'Обещаем, вы также как и Малыш, увидите Карлсона. Но не факт, что он улетит после выступления.', 0),
(784914, '1999-01-10', '12:00', '2 века 4 года 2 месяца 7 дней', 'Восточная часть Евразии   Америка', 'Соломон Майер Ротшильд', 'Натан Майер Ротшильд ', 'Смешное население', 'Маскировка под радугу', 'Майер Амшель Ротшильд', '/images/gallery/168aa99b86e.jpg', 'ВСЕ ЛЮБЯТ РАДУГУ, но не все ЛГБТ.', 0),
(784915, '1917-12-30', '15:00', '1 год', 'Екатеринбург, РСФСР', 'Массонское правительство', 'В. Ленин', 'Орда коммунистической нежити и Царская семья', 'Сублимация ненависти', 'Николай ll', '/images/gallery/168aab092e2.jpg', 'Коммунисты убивают русское население, а Николай ll сублимирует.', 0),
(784916, '2019-06-03', '01:24', '12 часов', 'Нигде и никогда', 'Вавилен Татарский', 'Сирруф', 'Фасук Карлович Сейфуль-Фарсейкин, Гусейн, Сергей Морковин, Андрей Гиреев', 'Generation «П»', 'Виктор Пелевин', '/images/gallery/168aa91ab4b.jpg', 'Постмодернистский роман Виктора Пелевина о поколении россиян, которое взрослело и формировалось во времена политических и экономических реформ 1990-х годов. Действие романа разворачивается в Москве 1990-х годов.', 0),
(784917, '2013-09-13', '03:00', '~ вечность', 'Везде и всегда', 'Безумное', 'Злобное', 'Вечное', 'Корабль полный зла', 'Господин Никто', '/images/gallery/168a9f1e326.jpg', 'Если Вы когда-нибудь представляли, что можно собрать все зло в мире и утопить его, чтобы очистить мир, то это пьеса для Вас. На самом деле, посадить на корабль нужно именно Вас, но поймете вы это лишь в конце своей жизни, либо вообще не поймете. ', 0),
(784918, '1460-10-02', '16:00', '10 часов', 'Арктика, потому что при поиске мишку белого выдает', 'Ф. Ф. Беллинсгаузен', ' Аристодем', 'Ликург Спартанский,  овцебык и коллектив коловраток', 'Кривое зеркало', 'Аристокл', '/images/gallery/168aac3fc8c.jpg', 'Незаконченный сатирический роман чешского писателя Ярослава Гашека. ', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `login` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `login`, `password`) VALUES
(1, 'root', '$2a$10$4VzpC4X6AAnGMIotlFor9.qTbOaMWrmVbeNozxV2NRM8DGOzT6p9q');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `many_news_has_many_media`
--
ALTER TABLE `many_news_has_many_media`
  ADD PRIMARY KEY (`news`,`media`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `id_2` (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actors`
--
ALTER TABLE `actors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=406266;
--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=784919;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;