import loadable from "@loadable/component";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Container from "./components/Container";
import ProgressLine from "./components/Loading/ProgressLine";
import { Provider } from "./context/GlobalState";
import Saved from "./pages/Saved";

const Home = loadable(() => import("./pages/Home"), {
  fallback: <ProgressLine />,
});
const Product = loadable(() => import("./pages/Product"), {
  fallback: <ProgressLine />,
});
const SearchResults = loadable(() => import("./pages/SearchResults"), {
  fallback: <ProgressLine />,
});
const Cart = loadable(() => import("./pages/Cart"), {
  fallback: <ProgressLine />,
});
const Login = loadable(() => import("./pages/Login"), {
  fallback: <ProgressLine />,
});
const Register = loadable(() => import("./pages/Register"), {
  fallback: <ProgressLine />,
});
const AR = loadable(() => import("./pages/AR"), {
  fallback: <ProgressLine />,
});

const App = () => {
  return (
      <Provider>
        <Router>
          <Routes>
            <Route path="/ar/:id" element={<AR />} />
            <Route path="/" element={<Container><Home /></Container>} />
            <Route path="/products/:id" element={<Container><Product /></Container>} />
            <Route path="/saved" element={<Container><Saved /></Container>} />
            <Route path="/search/:name" element={<Container><SearchResults /></Container>} />
            <Route path="/cart" element={<Container><Cart /></Container>} />
            <Route path="/login" element={<Container><Login /></Container>} />
            <Route path="/register" element={<Container><Register /></Container>} />
          </Routes>
        </Router>
      </Provider>
  );
};

// const App = () => {
//   return (
//     <Provider>
//       <Router>
//         <Routes>
//           <Route path="/ar/:id" element={<AR />} />
//         </Routes>
//         <Container>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products/:id" element={<Product />} />
//             <Route path="/saved" element={<Saved />} />
//             <Route path="/search/:name" element={<SearchResults />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </Container>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// };

export default App;
