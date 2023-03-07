module.exports.home = (req, res) => {
  return res.render("home.ejs", {
    title: "Home",
  });
}; // view engine -->view folder file ejs-->compile-->html -->controller-->router-->index.js--Client browser send file browser read file   create DOM(hierarchical tree structure) + css add THan js execute and finally display content on screen
