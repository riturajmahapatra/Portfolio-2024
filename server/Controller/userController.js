import { Intro } from '../Models/portfolioModel';

export const IntroSection = async (res, req) => {
  try {
    const userIntro = await Intro.find();
    console.log(userIntro);
    if (!userIntro) {
      return res.status(400).json({ msg: 'User Intro not found' });
    }
    return res.status(200).json({ msg: 'User created Sucessfully' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
