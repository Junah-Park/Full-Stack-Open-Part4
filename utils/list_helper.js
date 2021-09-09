const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
  // blogs is an array of objects blogs
  const reducer = (sum, item) => {
    return sum + item.likes
  }

  return blogs.reduce(reducer, 0)
}

module.exports = {
  dummy,
  totalLikes
}