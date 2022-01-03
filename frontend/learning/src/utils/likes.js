export const likesAndDislikes = (arr) => {
  const likes = arr.filter(
    (reaction) => reaction.emoticonId === "1f32b64c-ab18-413a-8090-b2c4696270f4"
  ).length;
  const dislikes = arr.filter(
    (reaction) => reaction.emoticonId === "6b5f1c52-6922-47ae-a196-abb32c04483c"
  ).length;

  return {
    likes,
    dislikes,
  };
};

export const checkIfUserLiked = (arr, id) => {
  if (!arr) return false;
  return arr.some(
    (reaction) =>
      reaction.userId === id &&
      reaction.emoticonId === "1f32b64c-ab18-413a-8090-b2c4696270f4"
  );
};

export const checkIfUserDisliked = (arr, id) => {
  if (!arr) return false;
  return arr.some(
    (reaction) =>
      reaction.userId === id &&
      reaction.emoticonId === "6b5f1c52-6922-47ae-a196-abb32c04483c"
  );
};
export const checkIfUserReacted = (arr, id) => {
  if (!arr) return false;
  return arr.some((reaction) => reaction.userId === id);
};

export const percentages = (arr) => {
  if (!arr) return 0;
  const likes = arr.filter(
    (reaction) => reaction.emoticonId === "1f32b64c-ab18-413a-8090-b2c4696270f4"
  ).length;
  const dislikes = arr.filter(
    (reaction) => reaction.emoticonId === "6b5f1c52-6922-47ae-a196-abb32c04483c"
  ).length;
  const allReactions = arr.length;
  const likesPercentage = (likes * 100) / allReactions;

  const dislikesPercentage = (dislikes * 100) / allReactions;

  return { likesPercentage, dislikesPercentage };
};
