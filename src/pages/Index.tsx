import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Globe, CreditCard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">AutoPage.AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Entrar</Button>
            <Button>Começar Grátis</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-3xl space-y-8 animate-fade-in-up">
            <h1 className="text-5xl font-bold leading-tight text-foreground md:text-6xl">
              Crie Páginas de Produto{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Automaticamente
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Envie uma imagem do seu produto e nossa IA gera uma página profissional completa em segundos. Publique instantaneamente em seu próprio domínio.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="text-lg shadow-elegant">
                Crie sua Primeira Página
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Ver Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border bg-card p-8 shadow-elegant transition-all hover:shadow-glow">
              <Zap className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-3 text-2xl font-bold text-card-foreground">Geração Instantânea</h3>
              <p className="text-muted-foreground">
                Nossa IA analisa sua imagem e gera nome, descrição, especificações e preço em segundos.
              </p>
            </Card>

            <Card className="border-border bg-card p-8 shadow-elegant transition-all hover:shadow-glow">
              <Globe className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-3 text-2xl font-bold text-card-foreground">Publicação Automática</h3>
              <p className="text-muted-foreground">
                Publique em subdomínio gratuito ou conecte seu próprio domínio. SSL e DNS configurados automaticamente.
              </p>
            </Card>

            <Card className="border-border bg-card p-8 shadow-elegant transition-all hover:shadow-glow">
              <CreditCard className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-3 text-2xl font-bold text-card-foreground">Planos Flexíveis</h3>
              <p className="text-muted-foreground">
                A partir de $2/mês. Crie até 5 páginas no plano básico ou páginas ilimitadas no Pro.
              </p>
            </Card>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Escolha seu Plano</h2>
            <p className="text-xl text-muted-foreground">Comece gratuitamente, faça upgrade quando precisar</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Basic Plan */}
            <Card className="border-border bg-card p-8">
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-card-foreground">Básico</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">$2</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Até 5 páginas
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Subdomínio gratuito
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    IA padrão
                  </li>
                </ul>
              </div>
              <Button className="w-full" variant="outline">
                Começar Grátis
              </Button>
            </Card>

            {/* Pro Plan */}
            <Card className="border-primary bg-card p-8 shadow-glow">
              <div className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                Popular
              </div>
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-card-foreground">Pro</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">$10</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Páginas ilimitadas
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Domínio próprio
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    IA avançada
                  </li>
                </ul>
              </div>
              <Button className="w-full">
                Começar Pro
              </Button>
            </Card>

            {/* Business Plan */}
            <Card className="border-border bg-card p-8">
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-card-foreground">Business</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">$50</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Múltiplos domínios
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Suporte prioritário
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    IA premium
                  </li>
                </ul>
              </div>
              <Button className="w-full" variant="outline">
                Começar Business
              </Button>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-2xl space-y-6 rounded-2xl bg-gradient-primary p-12 text-white shadow-glow">
            <h2 className="text-3xl font-bold md:text-4xl">
              Pronto para Criar sua Primeira Página?
            </h2>
            <p className="text-lg opacity-90">
              Junte-se a milhares de empreendedores que já estão criando páginas de produto incríveis com IA.
            </p>
            <Button size="lg" variant="secondary" className="text-lg">
              Começar Agora - É Grátis
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 AutoPage.AI. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
