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
      quizMessage: 'Why does World like war',
      optionType: 'single',

      options: [
        { optionId: 12, answerText: '1976' },
        { optionId: 13, answerText: '1966' },
        { optionId: 14, answerText: '1990' },

        { optionId: 125, answerText: '1966' },
      ],
    },
    {
      quizId: 1202,
      quizMessage: 'When did World War II stopped',
      optionType: 'multiple',
      options: [
        { optionId: 123, answerText: '1970' },
        { optionId: 124, answerText: '1963' },
        { optionId: 127, answerText: '1961' },

        { optionId: 125, answerText: '1966' },
      ],
    },
  ],
};
