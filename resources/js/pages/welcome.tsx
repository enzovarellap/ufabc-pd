import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    BarChart3,
    Bell,
    Car,
    CheckCircle2,
    DollarSign,
    FileText,
    LineChart,
    Shield,
    Sparkles,
    TrendingUp,
    Wrench,
    Zap,
} from 'lucide-react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="CarTrack - Controle Financeiro Inteligente para seu Carro">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700,800"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-[#0a0a0a] dark:via-blue-950/10 dark:to-[#0a0a0a]">
                {/* Navigation with Glassmorphism */}
                <nav className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/70 shadow-sm shadow-black/5 backdrop-blur-2xl dark:border-white/10 dark:bg-[#0a0a0a]/70">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                        <div className="flex items-center gap-2">
                            <div className="rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-2 shadow-lg shadow-blue-500/20">
                                <Car className="h-5 w-5 text-white" />
                            </div>
                            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-2xl font-black tracking-tight text-transparent dark:from-white dark:to-gray-300">
                                CarTrack
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            {auth.user ? (
                                <Link href={dashboard()}>
                                    <Button
                                        variant="default"
                                        size="default"
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
                                    >
                                        Dashboard
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            ) : (
                                <>
                                    <Link href={login()}>
                                        <Button
                                            variant="ghost"
                                            size="default"
                                            className="font-semibold text-gray-700 transition-all hover:scale-105 dark:text-gray-300"
                                        >
                                            Entrar
                                        </Button>
                                    </Link>
                                    {canRegister && (
                                        <Link href={register()}>
                                            <Button
                                                variant="default"
                                                size="default"
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 font-semibold shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
                                            >
                                                Começar Grátis
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </nav>

                {/* Hero Section - Enhanced with Modern Structure */}
                <section className="relative overflow-hidden px-6 pt-32 pb-24 lg:px-8 lg:pt-40 lg:pb-32">
                    {/* Animated Background Gradients */}
                    <div className="absolute top-0 left-1/4 h-[600px] w-[600px] -translate-x-1/2 animate-pulse rounded-full bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 blur-3xl dark:from-blue-500/20 dark:via-purple-500/10 dark:to-pink-500/20" />
                    <div className="absolute top-40 right-1/4 h-[500px] w-[500px] translate-x-1/2 animate-pulse rounded-full bg-gradient-to-bl from-purple-400/30 via-blue-400/20 to-cyan-400/30 blur-3xl [animation-delay:1s] dark:from-purple-500/20 dark:via-blue-500/10 dark:to-cyan-500/20" />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="text-center">
                            {/* Pre-headline with Glassmorphism */}
                            <div className="mb-8 inline-flex">
                                <Badge
                                    variant="outline"
                                    className="group border-white/30 bg-white/60 px-4 py-2.5 text-sm font-bold shadow-lg shadow-blue-500/10 backdrop-blur-xl transition-all hover:scale-105 hover:border-white/40 hover:bg-white/70 hover:shadow-xl hover:shadow-blue-500/20 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
                                >
                                    <Sparkles className="mr-2 inline h-4 w-4 text-blue-600 transition-transform group-hover:rotate-12 dark:text-blue-400" />
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                                        Gestão Financeira Automotiva
                                    </span>
                                </Badge>
                            </div>

                            {/* Main Headline - Larger, More Impactful */}
                            <h1 className="mb-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-5xl leading-[1.1] font-black tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl dark:from-white dark:via-gray-100 dark:to-white">
                                Controle total do
                                <br />
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        seu veículo
                                    </span>
                                    <div className="absolute right-0 -bottom-2 left-0 h-3 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-xl" />
                                </span>
                            </h1>

                            {/* Sub-headline - Problem + Solution */}
                            <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl md:text-2xl dark:text-gray-400">
                                Pare de perder dinheiro com gastos não
                                rastreados.
                                <br />
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    Monitore custos, FIPE e manutenções em tempo
                                    real.
                                </span>
                            </p>

                            {/* Primary CTA - More Prominent */}
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                {!auth.user && canRegister && (
                                    <Link href={register()}>
                                        <Button
                                            size="lg"
                                            className="group relative h-16 overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] px-10 text-lg font-bold shadow-2xl shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:bg-[position:100%_0] hover:shadow-2xl hover:shadow-purple-500/50"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                Começar Gratuitamente
                                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </Button>
                                    </Link>
                                )}
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-16 border-2 border-gray-300 bg-white/50 px-10 text-lg font-semibold backdrop-blur-sm transition-all hover:scale-105 hover:border-gray-400 hover:bg-white/80 dark:border-gray-700 dark:bg-gray-900/50 dark:hover:border-gray-600 dark:hover:bg-gray-900/80"
                                >
                                    <LineChart className="mr-2 h-5 w-5" />
                                    Ver Demo Interativa
                                </Button>
                            </div>

                            {/* Trust Indicators - Enhanced */}
                            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm sm:gap-8">
                                <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 dark:bg-green-950/30">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500" />
                                    <span className="font-medium text-green-900 dark:text-green-400">
                                        Sem cartão de crédito
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 dark:bg-blue-950/30">
                                    <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                                    <span className="font-medium text-blue-900 dark:text-blue-400">
                                        Setup em 2 minutos
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 dark:bg-purple-950/30">
                                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-500" />
                                    <span className="font-medium text-purple-900 dark:text-purple-400">
                                        Suporte prioritário
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image - Enhanced with Glassmorphism */}
                        <div className="relative mx-auto mt-24 max-w-6xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl" />
                            <div className="group hover:shadow-3xl relative overflow-hidden rounded-3xl border border-white/30 bg-white/40 p-2 shadow-2xl backdrop-blur-xl transition-all hover:border-white/40 dark:border-white/10 dark:bg-white/5">
                                <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                                    {/* Dashboard Preview with Glassmorphic Card */}
                                    <div className="flex h-full items-center justify-center p-8">
                                        <div className="rounded-2xl border border-white/30 bg-white/60 p-12 text-center backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                                            <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-4 shadow-lg shadow-blue-500/30">
                                                <BarChart3 className="h-16 w-16 text-white" />
                                            </div>
                                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                                Dashboard Inteligente
                                            </p>
                                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                                Insights em tempo real
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section - Bento Grid Layout */}
                <section className="px-6 py-20 lg:px-8 lg:py-32">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-16 text-center">
                            <div className="mb-4 inline-flex">
                                <Badge
                                    variant="outline"
                                    className="border-white/30 bg-gradient-to-r from-purple-50 to-blue-50 px-4 py-2 text-sm font-bold shadow-lg backdrop-blur-xl dark:from-purple-950/30 dark:to-blue-950/30"
                                >
                                    <Zap className="mr-2 inline h-4 w-4 text-purple-600 dark:text-purple-400" />
                                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">
                                        Funcionalidades Poderosas
                                    </span>
                                </Badge>
                            </div>
                            <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-5xl dark:from-white dark:to-gray-300">
                                Tudo que você precisa
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                                Ferramentas inteligentes para controle total do
                                seu veículo
                            </p>
                        </div>

                        {/* Bento Grid - Asymmetric Layout */}
                        <div className="grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
                            {/* Large Feature - Spans 2 columns */}
                            <Card className="group relative col-span-1 row-span-2 overflow-hidden border border-white/30 bg-gradient-to-br from-blue-500 to-purple-600 p-8 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl md:col-span-2">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
                                <div className="relative flex h-full flex-col justify-between">
                                    <div>
                                        <div className="mb-4 inline-flex rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                                            <DollarSign className="h-10 w-10 text-white" />
                                        </div>
                                        <h3 className="mb-3 text-3xl font-black text-white">
                                            Controle de Gastos
                                        </h3>
                                        <p className="text-lg text-blue-50">
                                            Registre combustível, manutenção,
                                            seguros e todos os custos. Visualize
                                            exatamente onde seu dinheiro está
                                            sendo investido com relatórios
                                            detalhados e gráficos intuitivos.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                        <span>Explorar funcionalidade</span>
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                                    </div>
                                </div>
                            </Card>

                            {/* Small Feature */}
                            <Card className="group relative col-span-1 overflow-hidden border border-white/30 bg-white/60 p-6 backdrop-blur-xl transition-all hover:scale-[1.02] hover:border-white/50 hover:bg-white/80 hover:shadow-xl dark:bg-white/5 dark:hover:bg-white/10">
                                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 p-3 shadow-lg">
                                    <FileText className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                    Tabela FIPE
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Valor de mercado em tempo real
                                </p>
                            </Card>

                            {/* Small Feature */}
                            <Card className="group relative col-span-1 overflow-hidden border border-white/30 bg-white/60 p-6 backdrop-blur-xl transition-all hover:scale-[1.02] hover:border-white/50 hover:bg-white/80 hover:shadow-xl dark:bg-white/5 dark:hover:bg-white/10">
                                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-green-500 to-green-600 p-3 shadow-lg">
                                    <Bell className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                    Alertas Smart
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Notificações de manutenção por km
                                </p>
                            </Card>

                            {/* Medium Feature */}
                            <Card className="group relative col-span-1 row-span-2 overflow-hidden border border-white/30 bg-gradient-to-br from-orange-500 to-red-500 p-8 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl">
                                <div className="relative flex h-full flex-col justify-between">
                                    <div>
                                        <div className="mb-4 inline-flex rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                                            <TrendingUp className="h-10 w-10 text-white" />
                                        </div>
                                        <h3 className="mb-3 text-2xl font-black text-white">
                                            Análises &<br />
                                            Insights
                                        </h3>
                                        <p className="text-orange-50">
                                            Relatórios inteligentes com
                                            previsões de gastos e tendências de
                                            mercado para seu veículo.
                                        </p>
                                    </div>
                                    <div className="mt-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                                        <div className="mb-2 flex items-center justify-between text-white">
                                            <span className="text-sm font-medium">
                                                Economia este mês
                                            </span>
                                            <span className="text-xl font-bold">
                                                +12%
                                            </span>
                                        </div>
                                        <div className="h-2 overflow-hidden rounded-full bg-white/20">
                                            <div className="h-full w-3/4 bg-white" />
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Wide Feature */}
                            <Card className="group relative col-span-1 overflow-hidden border border-white/30 bg-white/60 p-6 backdrop-blur-xl transition-all hover:scale-[1.02] hover:border-white/50 hover:bg-white/80 hover:shadow-xl md:col-span-2 dark:bg-white/5 dark:hover:bg-white/10">
                                <div className="flex items-start gap-6">
                                    <div className="inline-flex rounded-xl bg-gradient-to-br from-red-500 to-pink-600 p-3 shadow-lg">
                                        <Wrench className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                            Histórico Completo de Manutenções
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Registro detalhado de todas as
                                            revisões, trocas de óleo, pneus e
                                            serviços realizados no seu veículo.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            {/* Small Feature with Icon Grid */}
                            <Card className="group relative col-span-1 overflow-hidden border border-white/30 bg-gradient-to-br from-indigo-500 to-purple-600 p-6 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl">
                                <div className="flex h-full flex-col justify-between">
                                    <div>
                                        <div className="mb-4 inline-flex rounded-xl bg-white/20 p-3 backdrop-blur-sm">
                                            <Shield className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-white">
                                            Segurança Total
                                        </h3>
                                        <p className="text-sm text-indigo-50">
                                            Criptografia de ponta a ponta
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Stats Section - Enhanced with Glassmorphism */}
                <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-6 py-24 lg:px-8 lg:py-32">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-black text-white md:text-4xl">
                                Resultados que Impressionam
                            </h2>
                            <p className="text-lg text-blue-100">
                                Milhares de motoristas já economizam com
                                CarTrack
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
                            <div className="group rounded-3xl border border-white/30 bg-white/10 p-8 text-center backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/20">
                                <div className="mb-4 text-6xl font-black text-white md:text-7xl">
                                    R$ 2.4K
                                </div>
                                <div className="mb-2 text-lg font-bold text-white">
                                    Economia média anual
                                </div>
                                <div className="text-sm text-blue-100">
                                    Por usuário ativo
                                </div>
                            </div>
                            <div className="group rounded-3xl border border-white/30 bg-white/10 p-8 text-center backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/20">
                                <div className="mb-4 text-6xl font-black text-white md:text-7xl">
                                    15K+
                                </div>
                                <div className="mb-2 text-lg font-bold text-white">
                                    Usuários ativos
                                </div>
                                <div className="text-sm text-blue-100">
                                    E crescendo rapidamente
                                </div>
                            </div>
                            <div className="group rounded-3xl border border-white/30 bg-white/10 p-8 text-center backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/20">
                                <div className="mb-4 text-6xl font-black text-white md:text-7xl">
                                    98%
                                </div>
                                <div className="mb-2 text-lg font-bold text-white">
                                    Taxa de satisfação
                                </div>
                                <div className="text-sm text-blue-100">
                                    Avaliação dos usuários
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section - Modernized */}
                <section className="relative px-6 py-20 lg:px-8 lg:py-32">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-20 text-center">
                            <div className="mb-4 inline-flex">
                                <Badge
                                    variant="outline"
                                    className="border-white/30 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 text-sm font-bold shadow-lg backdrop-blur-xl dark:from-blue-950/30 dark:to-purple-950/30"
                                >
                                    <Zap className="mr-2 inline h-4 w-4 text-blue-600 dark:text-blue-400" />
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                                        Como Funciona
                                    </span>
                                </Badge>
                            </div>
                            <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-5xl dark:from-white dark:to-gray-300">
                                Simples. Rápido. Inteligente.
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                                Comece em minutos e veja resultados
                                imediatamente
                            </p>
                        </div>

                        <div className="relative grid gap-8 md:grid-cols-3 lg:gap-12">
                            {/* Connection Lines - Hidden on mobile */}
                            <div className="absolute top-12 right-1/4 left-1/4 hidden h-1 md:block">
                                <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-20" />
                            </div>

                            {/* Step 1 */}
                            <div className="group relative text-center">
                                <div className="relative mb-6 flex justify-center">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 blur-2xl transition-all group-hover:scale-150" />
                                    </div>
                                    <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/30 bg-gradient-to-br from-blue-500 to-blue-600 text-4xl font-black text-white shadow-2xl shadow-blue-500/40 backdrop-blur-sm transition-all group-hover:scale-110">
                                        1
                                    </div>
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                                    Cadastre seu Veículo
                                </h3>
                                <p className="mx-auto max-w-xs text-gray-600 dark:text-gray-400">
                                    Informações básicas em menos de 2 minutos.
                                    Modelo, ano, placa e pronto!
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="group relative text-center">
                                <div className="relative mb-6 flex justify-center">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 blur-2xl transition-all group-hover:scale-150" />
                                    </div>
                                    <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/30 bg-gradient-to-br from-purple-500 to-purple-600 text-4xl font-black text-white shadow-2xl shadow-purple-500/40 backdrop-blur-sm transition-all group-hover:scale-110">
                                        2
                                    </div>
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                                    Registre seus Gastos
                                </h3>
                                <p className="mx-auto max-w-xs text-gray-600 dark:text-gray-400">
                                    Adicione despesas rapidamente. O sistema
                                    rastreia e categoriza automaticamente.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="group relative text-center">
                                <div className="relative mb-6 flex justify-center">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-green-500/20 to-green-600/20 blur-2xl transition-all group-hover:scale-150" />
                                    </div>
                                    <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/30 bg-gradient-to-br from-green-500 to-green-600 text-4xl font-black text-white shadow-2xl shadow-green-500/40 backdrop-blur-sm transition-all group-hover:scale-110">
                                        3
                                    </div>
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                                    Receba Insights
                                </h3>
                                <p className="mx-auto max-w-xs text-gray-600 dark:text-gray-400">
                                    Dashboards inteligentes, alertas automáticos
                                    e análises que economizam seu dinheiro.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section - Enhanced Glassmorphic Design */}
                <section className="relative px-6 py-20 lg:px-8 lg:py-32">
                    {/* Background Gradients */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute top-1/2 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
                        <div className="absolute top-1/2 right-1/4 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-bl from-purple-500/20 to-pink-500/20 blur-3xl" />
                    </div>

                    <div className="mx-auto max-w-5xl">
                        <Card className="relative overflow-hidden border border-white/30 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-12 shadow-2xl lg:p-20">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

                            {/* Glassmorphic Orbs */}
                            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

                            <div className="relative text-center">
                                <div className="mb-6 inline-flex rounded-2xl border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-sm">
                                    <Sparkles className="mr-2 h-5 w-5 text-white" />
                                    <span className="font-bold text-white">
                                        Comece Hoje Mesmo
                                    </span>
                                </div>

                                <h2 className="mb-6 text-4xl leading-tight font-black text-white md:text-5xl lg:text-6xl">
                                    Pronto para economizar
                                    <br />
                                    com seu veículo?
                                </h2>

                                <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-blue-50">
                                    Junte-se a{' '}
                                    <strong>15.000+ motoristas</strong> que já
                                    economizam em média{' '}
                                    <strong>R$ 2.400/ano</strong> gerenciando
                                    melhor seus veículos.
                                </p>

                                {!auth.user && canRegister && (
                                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                        <Link href={register()}>
                                            <Button
                                                size="lg"
                                                className="group h-16 border-2 border-white bg-white px-10 text-lg font-bold text-blue-700 shadow-2xl transition-all hover:scale-105 hover:bg-blue-50 hover:shadow-2xl"
                                            >
                                                Criar Conta Grátis
                                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </Link>
                                        <Link href={login()}>
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="h-16 border-2 border-white bg-white/5 px-10 text-lg font-bold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/10"
                                            >
                                                Já tenho conta
                                            </Button>
                                        </Link>
                                    </div>
                                )}

                                {/* Trust Badges */}
                                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5" />
                                        <span>Sem compromisso</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5" />
                                        <span>Cancele quando quiser</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5" />
                                        <span>Dados 100% seguros</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* Footer - Modernized */}
                <footer className="relative border-t border-gray-200/50 bg-gradient-to-b from-white to-gray-50 px-6 py-16 lg:px-8 lg:py-20 dark:border-gray-800/50 dark:from-[#0a0a0a] dark:to-[#0f0f0f]">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 md:grid-cols-4 lg:gap-16">
                            {/* Brand Column */}
                            <div className="md:col-span-1">
                                <div className="mb-4 flex items-center gap-2">
                                    <div className="rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-2 shadow-lg shadow-blue-500/20">
                                        <Car className="h-5 w-5 text-white" />
                                    </div>
                                    <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-xl font-black text-transparent dark:from-white dark:to-gray-300">
                                        CarTrack
                                    </span>
                                </div>
                                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                    Gestão financeira inteligente para seu
                                    veículo. Economize mais, dirija tranquilo.
                                </p>
                                <div className="flex items-center gap-3">
                                    <Badge
                                        variant="outline"
                                        className="border-green-500/50 bg-green-50 text-xs font-semibold text-green-700 dark:border-green-500/30 dark:bg-green-950/30 dark:text-green-400"
                                    >
                                        <CheckCircle2 className="mr-1 inline h-3 w-3" />
                                        100% Seguro
                                    </Badge>
                                </div>
                            </div>

                            {/* Product Column */}
                            <div>
                                <h3 className="mb-4 text-sm font-black tracking-wider text-gray-900 uppercase dark:text-white">
                                    Produto
                                </h3>
                                <ul className="space-y-3 text-sm">
                                    <li>
                                        <a
                                            href="#"
                                            className="group inline-flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                        >
                                            <ArrowRight className="mr-2 -ml-5 h-3 w-3 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                            Funcionalidades
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="group inline-flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                        >
                                            <ArrowRight className="mr-2 -ml-5 h-3 w-3 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                            Preços
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="group inline-flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                        >
                                            <ArrowRight className="mr-2 -ml-5 h-3 w-3 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                            Integrações
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="group inline-flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                        >
                                            <ArrowRight className="mr-2 -ml-5 h-3 w-3 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Company Column */}
                            <div>
                                <h3 className="mb-4 text-sm font-black tracking-wider text-gray-900 uppercase dark:text-white">
                                    Empresa
                                </h3>
                                <ul className="space-y-3 text-sm">
                                    <li>
                                        <a
                                            href="#"
                                            className="group inline-flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                        >
                                            <ArrowRight className="mr-2 -ml-5 h-3 w-3 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                            Sobre Nós
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="group inline-flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                        >
                                            <ArrowRight className="mr-2 -ml-5 h-3 w-3 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="group inline-flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                        >
                                            <ArrowRight className="mr-2 -ml-5 h-3 w-3 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                            Carreiras
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="group inline-flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                        >
                                            <ArrowRight className="mr-2 -ml-5 h-3 w-3 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                            Contato
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Legal Column */}
                            <div>
                                <h3 className="mb-4 text-sm font-black tracking-wider text-gray-900 uppercase dark:text-white">
                                    Legal
                                </h3>
                                <ul className="space-y-3 text-sm">
                                    <li>
                                        <a
                                            href="#"
                                            className="group inline-flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                        >
                                            <ArrowRight className="mr-2 -ml-5 h-3 w-3 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                            Privacidade
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="group inline-flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                        >
                                            <ArrowRight className="mr-2 -ml-5 h-3 w-3 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                            Termos de Uso
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="group inline-flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                        >
                                            <ArrowRight className="mr-2 -ml-5 h-3 w-3 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                            Cookies
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="group inline-flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                        >
                                            <ArrowRight className="mr-2 -ml-5 h-3 w-3 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                            Licenças
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200/50 pt-8 text-center text-sm md:flex-row md:text-left dark:border-gray-800/50">
                            <p className="text-gray-600 dark:text-gray-400">
                                © {new Date().getFullYear()}{' '}
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    CarTrack
                                </span>
                                . Todos os direitos reservados.
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                                <span>Feito com</span>
                                <span className="text-red-500">♥</span>
                                <span>para motoristas brasileiros</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
