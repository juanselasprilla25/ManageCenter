import React from "react";

// Components
import { Footer } from "Components/Footer/Footer";

//Pages
import { AppRouter } from "Routes/AppRouter";
import { DataProvider } from "Context/DataContext";

function App() {
	return (
		<DataProvider>
			<div className="container">
				<AppRouter />
				<Footer />
			</div>
		</DataProvider>
	);
}

export default App;
