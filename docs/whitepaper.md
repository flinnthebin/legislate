# Executive Summary

Legislate.Me is an interactive art installation in the form of an application, designed to enable citizens of Australia to utilize their freedom of political expression. By engaging with the application, users can learn about bills currently before the Australian Federal Parliament, express their opinions on the proposed legislation, and send their thoughts directly to their local federal member of parliament (MP). The application uses Google OAuth for user authentication and is free to use, with the potential for a nominal fee if usage exceeds a certain threshold.

## Introduction

The right to political expression is fundamental in democratic societies. However, many citizens find it challenging to understand and engage with the legislative process. Legislate.Me aims to bridge this gap by providing an accessible platform for users to learn about and express their opinions on bills currently before parliament. As an interactive art installation, the application encourages active participation in the political process, promoting a sense of empowerment among users.

## Application Features

### User Authentication

Legislate.Me requires users to have a Google account that is older than two years and set to the Australian region. This ensures that only Australian citizens engage with the platform and helps maintain the security and integrity of the application.

### Bill Selection and Information

Upon logging in, users are presented with a list of bills that they have not yet engaged with. By selecting a bill, users are directed to a page containing a 5-minute YouTube video that offers an unbiased explanation of the bill. The video encourages users to pursue further research, serving as a primer for informed political engagement.

### User Engagement and Feedback

Below the video, users are prompted to answer five open-ended questions with a 300-character limit. This format avoids binary scales and data aggregation, focusing instead on individual expression. Once users submit their answers, an email is sent through the Gmail API to their local federal MP based on the provided postcode.

### Bill Tracking and Resubmission

After a user has engaged with a bill, it is removed from the list of available bills and added to a list of bills they have engaged with. Bills remain locked on this list for 12 months. If a bill is still before parliament after a year, the user can submit their thoughts again.

### Monetization and Preservation Efforts

The application is free to use as it is an art installation. However, if the user base exceeds 10,000 monthly active users (MAUs), the artist reserves the right to charge a nominal fee of $1/year to cover Firebase costs. Any excess funds will be directed towards koala habitat preservation and other wildlife conservation efforts.

##  Privacy and Security

### Data Integrity

Legislate.Me takes user privacy and security seriously. By utilizing Google OAuth, the artist, Google, and the government have limited access to users' political opinions. The Gmail TOS states that Google will only access a users email in the event that their algorithm detects CSAM or similar content. User submissions are submitted solely to their local federal representative, which limits visibility to government as a whole. The artist can only see the invoice for the Oauth service. Users can trust that their opinions remain between them and their local federal representatives.

### AI/NLP and Data Aggregation Considerations

Legislate.Me is designed with user privacy and individual expression in mind. The application employs open-ended questions and short response lengths to minimize the potential for data aggregation using AI/NLP tools. While some analysis techniques may be able to extract insights from the responses, these methods may not capture the full complexity and nuance of individual opinions.

By choosing this design, the application emphasizes the importance of genuine political expression and engagement, rather than focusing on data aggregation and analysis. This approach helps to address concerns users may have about AI/NLP tools and the potential misuse of their opinions, further reinforcing Legislate.Me's commitment to privacy and the democratic process.

##  Conclusion

Legislate.Me is an innovative art installation that empowers Australian citizens to engage in the political process by learning about and expressing their opinions on current legislation. The application maintains user privacy and security, offering a safe platform for political expression. As an interactive and educational tool, Legislate.Me encourages active participation in democracy and fosters a more informed and engaged citizenry.