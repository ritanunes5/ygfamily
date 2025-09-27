import { Card, CardContent } from "@/components/ui/card";
import blackpinkOfficial from "@/assets/blackpink-official.jpg";
import babymonsterOfficial from "@/assets/babymonster-official.jpg";
import treasureOfficial from "@/assets/treasure-official.jpg";

const artists = [
  {
    id: 1,
    name: "BLACKPINK",
    image: blackpinkOfficial,
    status: "Latest Song"
  },
  {
    id: 2,
    name: "BABYMONSTER",
    image: babymonsterOfficial,
    status: "Mini-Album"
  },
  {
    id: 3,
    name: "TREASURE",
    image: treasureOfficial,
    status: "World Tour"
  }
];

const ArtistShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Artists</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the incredible talent that defines the YG Family legacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <Card 
              key={artist.id} 
              className="card-glass group cursor-pointer overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {artist.status}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {artist.name}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistShowcase;