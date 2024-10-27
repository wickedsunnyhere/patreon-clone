export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">About CreatorSpace</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          CreatorSpace is a platform that enables creators to build sustainable
          businesses around their passionate communities. We provide the tools
          creators need to run a subscription content service, as well as ways
          for them to build closer relationships with their most engaged fans.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          We believe in empowering creators to do what they love and get paid
          for it. Our platform makes it easy for creators to monetize their
          content while building meaningful connections with their supporters.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">For Creators</h2>
        <p className="mb-6">
          Whether you're a writer, artist, musician, developer, or content
          creator of any kind, CreatorSpace provides you with the tools to:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Build a sustainable income through memberships</li>
          <li>Connect directly with your most passionate fans</li>
          <li>Share exclusive content with your supporters</li>
          <li>Grow your creative business</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">For Supporters</h2>
        <p className="mb-6">
          Support the creators you love and get exclusive benefits:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Access exclusive content</li>
          <li>Join creator communities</li>
          <li>Engage directly with creators</li>
          <li>Support creative work you value</li>
        </ul>
      </div>
    </div>
  );
}