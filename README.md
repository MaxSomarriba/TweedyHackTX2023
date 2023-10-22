# Tweety Chrome Extension

## Overview

**Tweety** is a Google Chrome extension designed to enhance your Twitter experience, making it safer and more enjoyable. It utilizes HTML, Flask, and JavaScript to provide real-time content filtering for Twitter feeds, automatically censoring toxic or sensitive content.

## How To Use
- Download or clone this repository
- **Open [the extensions page](chrome://extensions)** in your browser: `chrome://extensions`. This link works on any chromium-based browser.
- If you did not do it already, **toggle the "developer mode"**. This is usually a toggle button at the top right of the extensions page.
- Click the button **_load unpacked extension_**.
- In the window that pops up, **select the folder that's called chrome-extension**, then **click _ok_**.
- **Done!** A new extension called _Tweety_ should have appeared in the list.
- **Run the Flask server** by navigating to the chrome-extension folder in your terminal and running `python3 flaskRunner.py` from the pythonHost folder.
- **Navigate to Twitter** and enjoy a safer, more enjoyable Twitter experience!



## Key Features

- **Content Filtering:** Tweety uses AI-powered web scraping to locate tweets on your Twitter feed. These tweets are evaluated for toxicity, and if they meet a certain threshold, they are discreetly censored.

- **User Customization:** Customize content filters according to your preferences for a personalized Twitter experience.

- **Privacy Priority:** Tweety respects your privacy and does not collect or store personal data.

- **GitHub Version Control:** Our project is well-organized thanks to version control using GitHub, allowing for seamless collaboration among team members.

## Challenges

Developing Tweety came with its own set of challenges, including working with web scraping techniques to extract tweets from Twitter's web pages. Overcoming these hurdles has been a part of our learning journey.

## What's Next

Our vision for Tweety extends beyond Twitter. We plan to expand it to other social media platforms and incorporate picture and video evaluation in the future, making it an even more versatile and robust tool.

## Acknowledgments

This project was created by a team of first-time hackathon participants as a submission for HackTX 2023, showcasing our adaptability and resourcefulness in overcoming technical challenges.

## Contributors

- Max Somarriba
    - [Portfolio](https://maxsomarriba.com/)
    - [GitHub](https://github.com/MaxSomarriba)
- Dillon Luong
    - [GitHub](https://github.com/binklebop)
- Eric Rodriguez
    - [GitHub](https://github.com/Keeylo)


Feel free to contact us with any questions, feedback, or collaboration opportunities.
