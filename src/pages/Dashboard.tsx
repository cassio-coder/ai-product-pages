import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Plus, LogOut, Settings } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);
  const [pages, setPages] = useState<any[]>([]);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      // Buscar perfil do usuário
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (profileError) {
        console.error("Erro ao buscar perfil:", profileError);
      } else {
        setProfile(profileData);
      }

      // Buscar páginas do usuário
      const { data: pagesData, error: pagesError } = await supabase
        .from("pages")
        .select("*")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false });

      if (pagesError) {
        console.error("Erro ao buscar páginas:", pagesError);
      } else {
        setPages(pagesData || []);
      }
    } catch (error) {
      console.error("Erro ao verificar autenticação:", error);
      toast({
        title: "Erro",
        description: "Erro ao carregar dados",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const getPlanDetails = (plan: string) => {
    switch (plan) {
      case "basic":
        return { name: "Básico", maxPages: 5, color: "text-blue-500" };
      case "pro":
        return { name: "Pro", maxPages: Infinity, color: "text-purple-500" };
      case "business":
        return { name: "Business", maxPages: Infinity, color: "text-amber-500" };
      default:
        return { name: "Gratuito", maxPages: 0, color: "text-gray-500" };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="h-12 w-12 text-primary animate-pulse mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  const planDetails = getPlanDetails(profile?.subscription_plan);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">AutoPage.AI</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" onClick={handleSignOut}>
                <LogOut className="h-5 w-5 mr-2" />
                Sair
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Informações do Plano */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Olá, {profile?.full_name || profile?.email}!
              </h2>
              <p className="text-muted-foreground">
                Plano: <span className={`font-semibold ${planDetails.color}`}>{planDetails.name}</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Páginas criadas: {profile?.pages_created || 0} 
                {profile?.max_pages > 0 && ` / ${profile.max_pages}`}
                {profile?.max_pages === 0 && " (Assine um plano para criar páginas)"}
              </p>
            </div>
            <Button onClick={() => navigate("/create")}>
              <Plus className="h-5 w-5 mr-2" />
              Nova Página
            </Button>
          </div>
        </Card>

        {/* Lista de Páginas */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Suas Páginas</h3>
        </div>

        {pages.length === 0 ? (
          <Card className="p-12 text-center">
            <Sparkles className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">Nenhuma página criada ainda</h3>
            <p className="text-muted-foreground mb-6">
              {profile?.max_pages === 0 
                ? "Assine um plano para começar a criar suas páginas de produto"
                : "Crie sua primeira página de produto com IA em segundos"}
            </p>
            {profile?.max_pages > 0 ? (
              <Button onClick={() => navigate("/create")}>
                <Plus className="h-5 w-5 mr-2" />
                Criar Primeira Página
              </Button>
            ) : (
              <Button onClick={() => navigate("/pricing")}>
                Ver Planos
              </Button>
            )}
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pages.map((page) => (
              <Card key={page.id} className="p-6 hover:shadow-lg transition-shadow">
                {page.image_url && (
                  <img
                    src={page.image_url}
                    alt={page.product_name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h4 className="text-lg font-bold mb-2">{page.product_name}</h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {page.product_description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    page.published 
                      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                      : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  }`}>
                    {page.published ? "Publicada" : "Rascunho"}
                  </span>
                  {page.product_price && (
                    <span className="font-semibold text-primary">
                      ${page.product_price}
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;