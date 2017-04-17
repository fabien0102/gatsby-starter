// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programatically
// create pages.
// exports.createPages = ({graphql, actionCreators}) => {
//   const {upsertPage} = actionCreators;

//   return new Promise((resolve, reject) => {
//     graphql(
//       `
//       {
//         allFile {
//           edges {
//             node {
//               id
//             }
//           }
//         }
//       }
//     `
//     ).then(result => {
//       if (result.errors) {
//         return reject(result.errors);
//       }

//       result.data.allFile.edges.forEach(edge => {
//         const path = /pages(.*)\.tsx$/.exec(edge.node.id)[1];
//         upsertPage({
//           path: path === `/index` ? `/` : path,
//           component: edge.node.id
//         });
//         resolve();
//       });
//     });
//   });
// };
