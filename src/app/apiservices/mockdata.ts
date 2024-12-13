export const mockdata = {
  setting: {
    timerEnabled: false,
  },
  pagination: {
    pageNo: 1,
    totalQuiz: 2,
  },
  quizzes: [
    {
      quizId: 1200,
      quizVideo: 'https://www.youtube.com/shorts/ij6jwjizw54',
      quizImage:
        'https://www.cartrollers.com/wp-content/uploads/2024/08/Three-Crowns-Filled-Evaporated-Milk-160g-24-Tins-390x390.jpeg',
      quizMessage: 'When did America gain their Independence',
      optionType: 'single',

      options: [
        { optionId: 123, answerText: '22 July 1970' },
        { optionId: 124, answerText: '4 July 1776' },
        { optionId: 127, answerText: '2 January 2020' },

        { optionId: 125, answerText: '20 March 1966' },
      ],
    },
    {
      quizId: 1202,
      quizMessage: 'Which of these are sea animals',
      optionType: 'multiple',
      options: [
        { optionId: 133, answerText: 'Goat' },
        { optionId: 134, answerText: 'Shark' },
        { optionId: 137, answerText: 'Tiger' },
        { optionId: 135, answerText: 'Crab' },
      ],
    },
  ],
};
