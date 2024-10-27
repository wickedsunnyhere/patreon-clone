import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Music, Video, Code, PenTool } from "lucide-react";

export default function Home() {
  const categories = [
    { name: "Art", icon: Palette },
    { name: "Music", icon: Music },
    { name: "Video", icon: Video },
    { name: "Development", icon: Code },
    { name: "Writing", icon: PenTool },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Support the Creators You Love
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join a community of millions of creators and supporters. Share your work,
            build your audience, and earn recurring revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/explore">
                Explore Creators <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/create">Become a Creator</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Discover by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.name}
                  variant="outline"
                  className="h-32 flex flex-col items-center justify-center gap-2"
                  asChild
                >
                  <Link href={`/category/${category.name.toLowerCase()}`}>
                    <Icon className="h-8 w-8" />
                    <span>{category.name}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Creators Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Creators
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-muted" />
                    <div>
                      <h3 className="font-semibold">Creator Name</h3>
                      <p className="text-sm text-muted-foreground">Category</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Short description about the creator and their work.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      1.2K Supporters
                    </span>
                    <Button variant="secondary" size="sm">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}