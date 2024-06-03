import React, { useState } from "react";
import { ImageGrid } from "./components/ImageGrid";
import { ImageModal } from "./components/ImageModal";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzA0OXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2NjUwMTQyOTM&ixlib=rb-1.2.1&q=80&w=400",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzA0OXwwfDF8c2VhcmNofDN8fG5hdHVyZXxlbnwwfHx8fDE2NjUwMTQyOTM&ixlib=rb-1.2.1&q=80&w=400",
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzA0OXwwfDF8c2VhcmNofDR8fG5hdHVyZXxlbnwwfHx8fDE2NjUwMTQyOTM&ixlib=rb-1.2.1&q=80&w=400",
    "https://images.unsplash.com/photo-1488509082528-cefbba5ad692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzA0OXwwfDF8c2VhcmNofDV8fG5hdHVyZXxlbnwwfHx8fDE2NjUwMTQyOTM&ixlib=rb-1.2.1&q=80&w=400",
    "https://images.unsplash.com/photo-1498804103079-a6351b050096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzA0OXwwfDF8c2VhcmNofDZ8fG5hdHVyZXxlbnwwfHx8fDE2NjUwMTQyOTM&ixlib=rb-1.2.1&q=80&w=400",
    "https://plus.unsplash.com/premium_photo-1686090449483-89a9b794e7cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/626429082/photo/guy-holding-flaming-torch.jpg?s=612x612&w=0&k=20&c=sS4wCqA6VbKEjPUHzDETF90Rjv22OV43wAkLCFl1BZM=",
    "https://media.istockphoto.com/id/1198689215/photo/the-male-with-a-bright-firework-stick-standing-on-a-mountain-evening-night-time.jpg?s=612x612&w=0&k=20&c=Ci7g3OvKzr2rFYGi9YcTx5nhuSB2OzmpEmVfytAAMfQ=",
    "https://media.istockphoto.com/id/1254568262/photo/fantasy-adventure-photo-with-a-girl-on-top-of-a-rock-cliff.jpg?s=612x612&w=0&k=20&c=XyR-KwfGQYxzXYmwSmpiNIPFwlvWpbM7gWWjJmz0sx8=",
    "https://media.istockphoto.com/id/1145303642/photo/the-man-and-a-woman-holding-firework-sticks-evening-night-time.jpg?s=612x612&w=0&k=20&c=UUjzz1h_by8G8DMFODHp5x5sjPc-mXggE5mD0s_njmI=",
    "https://media.istockphoto.com/id/637082884/photo/smoke-signal.jpg?s=612x612&w=0&k=20&c=VBmKcjTL7h_lZSgQ0-nQwm8pwxaODkc2i0Jo3URIdPw=",
    "https://media.istockphoto.com/id/1138368965/photo/beautiful-wedding-couple-posing-in-field-with-red-smoke-producing.jpg?s=612x612&w=0&k=20&c=pVdmvZutglziDhCJnoDgi08sQNNizablfNOmKUMfJvA=",
    "https://media.istockphoto.com/id/1333346240/vector/alien-spaceship-looming-in-the-clouds-3d-illustration.jpg?s=612x612&w=0&k=20&c=Jm856TRR3M0Q05jKqtlKgR8Z5WAbOof2uZMmU95Q_kA="

  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Normally, here you would filter images based on the search query
    // For now, we will just log the query
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Photo Gallery</h1>
       
      <ImageGrid images={images} setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
};

export default App;