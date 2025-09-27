import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "BLACKPINK Announces European Tour 2025",
    excerpt: "As superstars globais confirmam datas em várias cidades europeias para o primeiro semestre...",
    category: "Tour",
    date: "2025-01-20",
    featured: true
  },
  {
    id: 2,
    title: "BABYMONSTER Lança Novo Álbum 'DRIP'",
    excerpt: "O grupo rookie da YG surpreende com seu primeiro álbum completo que está quebrando recordes...",
    category: "Music",
    date: "2025-01-18",
    featured: false
  },
  {
    id: 3,
    title: "YG Entertainment Anuncia Audições Globais 2025",
    excerpt: "A empresa abre audições mundiais para descobrir os próximos talentos da YG Family...",
    category: "News",
    date: "2025-01-15",
    featured: false
  }
];

const NewsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="text-primary">News</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with the hottest stories from YG Family
            </p>
          </div>
          <div className="hidden md:flex items-center text-primary hover:text-primary-glow cursor-pointer transition-colors">
            <span className="mr-2">View All</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <Card className="card-glass lg:row-span-2">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  {newsItems[0].category}
                </Badge>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(newsItems[0].date).toLocaleDateString()}
                </div>
              </div>
              <CardTitle className="text-2xl leading-tight">
                {newsItems[0].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {newsItems[0].excerpt} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </CardContent>
          </Card>

          {/* Regular Articles */}
          <div className="space-y-6">
            {newsItems.slice(1).map((item) => (
              <Card key={item.id} className="card-glass">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="border-primary text-primary">
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {item.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;