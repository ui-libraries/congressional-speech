-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 13, 2018 at 10:03 PM
-- Server version: 10.0.33-MariaDB
-- PHP Version: 7.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `congress`
--

-- --------------------------------------------------------

--
-- Table structure for table `speeches`
--

CREATE TABLE `speeches` (
  `id` int(11) NOT NULL,
  `speaker_state` tinytext NOT NULL,
  `congress` smallint(6) NOT NULL,
  `origin_url` text NOT NULL,
  `the_order` text NOT NULL,
  `chamber` text NOT NULL,
  `speaking` longtext NOT NULL,
  `speaker_party` text NOT NULL,
  `bills` text NOT NULL,
  `pages` text NOT NULL,
  `speaker_raw` text NOT NULL,
  `speaker_first` text NOT NULL,
  `speaker_last` text NOT NULL,
  `title` text NOT NULL,
  `number` int(11) NOT NULL,
  `volume` int(11) NOT NULL,
  `session` int(11) NOT NULL,
  `capitolwords_url` text NOT NULL,
  `date` date NOT NULL,
  `bioguide_id` text NOT NULL,
  `origin_id` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;