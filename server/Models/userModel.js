import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Please provide an email'],
    },
    password: {
      type: String,
      required: true,
    },

    intro: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    // projects: [
    //   {
    //     title: {
    //       type: String,
    //       required: true,
    //     },
    //     description: {
    //       type: String,
    //       required: true,
    //     },
    //     tags: {
    //       type: [String],
    //     },
    //     imageUrl: {
    //       type: String,
    //       required: true,
    //     },
    //     imgHref: {
    //       type: String,
    //     },
    //   },
    // ],
    experiences: [
      {
        title: {
          type: String,
          required: true,
        },
        company: {
          type: String,
          required: true,
        },
        location: {
          type: String,
        },
        description: {
          type: String,
          required: true,
        },
        icon: {
          type: String,
        },
        date: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
