'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'posts',
      [
        {
          teacher_id: 1,
          title: 'Yoga Pose Of The Day: Warrior II/Virabhadrasana II',
          tag: 'yoga',
          image: 'https://47h07141n4wr3s4gyj49ii1d-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/AdobeStock_229202288-e1571412646136-1200x638.jpeg',
          content: 'Take a big step forward with your left foot to start in a staggered stance, with your feet almost mat-length apart.Extend your arms so that they are parallel to the floor. Bend your left knee so that it\'s at or near a 90degree angle, your thigh parallel to the floor, while keeping the right leg straightPoint your left toes forward and turn your right foot out to the right so that it\'s perpendicular to your left foot. Your left heel should be in line with the arch of your right foot. At the same time, twist your torso to the right so that your left hip is facing toward the front of the room and your right hip is facing toward the back. Your left arm and your head should both be pointing forward and your right arm should be pointing back. Hold for 1 to 5 breaths.',
          likes: 4
        },
        {
          teacher_id: 2,
          title: '10 Daily Affirmations. Choose the ones that fit you best',
          tag: 'positive mindset',
          image: 'https://shrm-res.cloudinary.com/image/upload/c_crop,h_704,w_1254,x_0,y_0/w_auto:100,w_1200,q_35,f_auto/v1/Tools%20and%20Samples/tk_wellness_sdydf0.jpg',
          content: '1. Each day is a new opportunity. Yesterday is over and done. 2. I know that old, negative patterns no longer limit me. I let them go with ease. 3. I accept and experience all my feelings. 4. It is healthier to express myself clearly and directly. 5. It is safe for me to be vulnerable. 6. I can reward myself for trying new things. 7. My dreams can come true. 8. I choose life. I choose happiness. 9. I have the freedom and power to create the life I desire. 10. I forgive myself completely.',
          likes: 10
        },
        {
          teacher_id: 3,
          title: '6-Minute At-Home Glutes Workout',
          tag: 'workout',
          image: 'https://starmarkfitnessstudio.com/wp-content/uploads/2020/05/A-Definitive-Guide-to-the-Best-Glute-Exercises.jpg',
          content: 'Glute bridge series: To do a glute bridge, lay on your back with your knees bent and your feet a hip-width distance apart and flat on the floor. Relaxing your neck and upper body, press your feet firmly into the floor, and lift your hips up, activating your glutes and core first and hamstrings second. Then, slowly lower your hips back down. (Note: Make sure to activate your core to protect your lower back.) 10 glute bridges10 pulses holding the glute bridge at the top15-second break. Repeat 2 more times for a total of 3 rounds',
          likes: 61
        },
        {
          teacher_id: 3,
          title: 'Reishi Mushroom Benefits',
          tag: 'diet',
          image: 'https://cdn.shopify.com/s/files/1/0058/0252/4783/articles/Reishi_mushroom_benefits_4_1200x.jpg?v=1609701576',
          content: 'One of the most important effects of the reishi mushroom is that it can boost your immune system. While some details are still uncertain, test-tube studies have shown that reishi can affect the genes in white blood cells, which are critical parts of your immune system.Research in cancer patients has shown that some of the molecules found in the mushroom can increase the activity of a type of white blood cell called natural killer cells.Many people consume this fungus due to its potential cancer-fighting properties. Also One 12-week study of 26 people showed that reishi mushroom may increase “good” HDL cholesterol and decrease triglycerides',
          likes: 17
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {})
  }
};
