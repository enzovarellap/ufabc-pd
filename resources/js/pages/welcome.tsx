import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    AlertCircle,
    BarChart3,
    Bell,
    Car,
    CheckCircle2,
    DollarSign,
    FileText,
    LineChart,
    Shield,
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

            <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a]">
                {/* Navigation */}
                <nav className="fixed top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-xl dark:border-gray-800/50 dark:bg-[#0a0a0a]/80">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                        <div className="flex items-center gap-2">
                            <Car className="h-8 w-8 text-blue-600 dark:text-blue-500" />
                            <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                CarTrack
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            {auth.user ? (
                                <Link href={dashboard()}>
                                    <Button variant="default" size="default">
                                        Dashboard
                                    </Button>
                                </Link>
                            ) : (
                                <>
                                    <Link href={login()}>
                                        <Button
                                            variant="ghost"
                                            size="default"
                                            className="text-gray-700 dark:text-gray-300"
                                        >
                                            Entrar
                                        </Button>
                                    </Link>
                                    {canRegister && (
                                        <Link href={register()}>
                                            <Button
                                                variant="default"
                                                size="default"
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                                            >
                                                Começar Grátis
                                            </Button>
                                        </Link>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative overflow-hidden px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-32">
                    {/* Background gradient orbs */}
                    <div className="absolute top-0 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/10" />
                    <div className="absolute top-20 right-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-500/10" />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="text-center">
                            <Badge
                                variant="outline"
                                className="mb-8 border-blue-500/50 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/30 dark:text-blue-400"
                            >
                                <Zap className="mr-2 inline h-4 w-4" />
                                Controle Total do seu Veículo
                            </Badge>

                            <h1 className="mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-5xl font-black leading-tight tracking-tight text-transparent dark:from-white dark:via-gray-200 dark:to-white md:text-6xl lg:text-7xl">
                                Seu carro merece{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    gestão inteligente
                                </span>
                            </h1>

                            <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 md:text-xl">
                                Acompanhe gastos, valores FIPE, receba alertas de
                                manutenção e tome decisões inteligentes sobre seu
                                veículo. Tudo em um só lugar.
                            </p>

                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                {!auth.user && canRegister && (
                                    <Link href={register()}>
                                        <Button
                                            size="lg"
                                            className="h-14 bg-gradient-to-r from-blue-600 to-blue-700 px-8 text-lg font-semibold shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-500/40"
                                        >
                                            Começar Agora - É Grátis
                                            <CheckCircle2 className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                )}
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 border-2 px-8 text-lg font-semibold transition-all hover:scale-105"
                                >
                                    Ver Demonstração
                                    <LineChart className="ml-2 h-5 w-5" />
                                </Button>
                            </div>

                            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-500">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500" />
                                    <span>Sem cartão de crédito</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500" />
                                    <span>Configuração em 2 minutos</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500" />
                                    <span>Suporte 24/7</span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image/Dashboard Preview */}
                        <div className="relative mx-auto mt-20 max-w-6xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
                            <div className="relative overflow-hidden rounded-2xl border border-gray-200/50 bg-white p-4 shadow-2xl dark:border-gray-800/50 dark:bg-gray-900/50">
                                <div className="aspect-video rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                                    {/* Placeholder for dashboard screenshot */}
                                    <div className="flex h-full items-center justify-center">
                                        <div className="text-center">
                                            <BarChart3 className="mx-auto mb-4 h-20 w-20 text-gray-400 dark:text-gray-600" />
                                            <p className="text-lg font-medium text-gray-500 dark:text-gray-500">
                                                Dashboard Preview
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="px-6 py-20 lg:px-8 lg:py-32">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-16 text-center">
                            <Badge
                                variant="outline"
                                className="mb-4 border-purple-500/50 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700 dark:border-purple-500/30 dark:bg-purple-950/30 dark:text-purple-400"
                            >
                                Funcionalidades
                            </Badge>
                            <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">
                                Tudo que você precisa
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                                Ferramentas poderosas para gerenciar cada aspecto do
                                seu veículo
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {/* Feature 1 */}
                            <Card className="group relative overflow-hidden border-2 border-gray-200/50 bg-white p-8 transition-all hover:scale-105 hover:border-blue-500/50 hover:shadow-xl dark:border-gray-800/50 dark:bg-gray-900/50 dark:hover:border-blue-500/50">
                                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-blue-500/10 blur-2xl transition-all group-hover:bg-blue-500/20" />
                                <div className="relative">
                                    <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 dark:bg-blue-950/50">
                                        <DollarSign className="h-8 w-8 text-blue-600 dark:text-blue-500" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                                        Controle de Gastos
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Registre e acompanhe todos os gastos com
                                        combustível, manutenção e mais. Visualize onde
                                        seu dinheiro está indo.
                                    </p>
                                </div>
                            </Card>

                            {/* Feature 2 */}
                            <Card className="group relative overflow-hidden border-2 border-gray-200/50 bg-white p-8 transition-all hover:scale-105 hover:border-purple-500/50 hover:shadow-xl dark:border-gray-800/50 dark:bg-gray-900/50 dark:hover:border-purple-500/50">
                                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-purple-500/10 blur-2xl transition-all group-hover:bg-purple-500/20" />
                                <div className="relative">
                                    <div className="mb-4 inline-flex rounded-xl bg-purple-100 p-3 dark:bg-purple-950/50">
                                        <FileText className="h-8 w-8 text-purple-600 dark:text-purple-500" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                                        Consulta Tabela FIPE
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Acompanhe a valorização ou desvalorização do
                                        seu veículo com dados atualizados da Tabela
                                        FIPE.
                                    </p>
                                </div>
                            </Card>

                            {/* Feature 3 */}
                            <Card className="group relative overflow-hidden border-2 border-gray-200/50 bg-white p-8 transition-all hover:scale-105 hover:border-green-500/50 hover:shadow-xl dark:border-gray-800/50 dark:bg-gray-900/50 dark:hover:border-green-500/50">
                                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-green-500/10 blur-2xl transition-all group-hover:bg-green-500/20" />
                                <div className="relative">
                                    <div className="mb-4 inline-flex rounded-xl bg-green-100 p-3 dark:bg-green-950/50">
                                        <Bell className="h-8 w-8 text-green-600 dark:text-green-500" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                                        Alertas de Manutenção
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Receba notificações inteligentes baseadas na
                                        quilometragem para nunca perder uma manutenção
                                        importante.
                                    </p>
                                </div>
                            </Card>

                            {/* Feature 4 */}
                            <Card className="group relative overflow-hidden border-2 border-gray-200/50 bg-white p-8 transition-all hover:scale-105 hover:border-orange-500/50 hover:shadow-xl dark:border-gray-800/50 dark:bg-gray-900/50 dark:hover:border-orange-500/50">
                                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-orange-500/10 blur-2xl transition-all group-hover:bg-orange-500/20" />
                                <div className="relative">
                                    <div className="mb-4 inline-flex rounded-xl bg-orange-100 p-3 dark:bg-orange-950/50">
                                        <TrendingUp className="h-8 w-8 text-orange-600 dark:text-orange-500" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                                        Análises e Relatórios
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Gráficos detalhados e insights sobre seus
                                        gastos, tendências e projeções futuras.
                                    </p>
                                </div>
                            </Card>

                            {/* Feature 5 */}
                            <Card className="group relative overflow-hidden border-2 border-gray-200/50 bg-white p-8 transition-all hover:scale-105 hover:border-red-500/50 hover:shadow-xl dark:border-gray-800/50 dark:bg-gray-900/50 dark:hover:border-red-500/50">
                                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-red-500/10 blur-2xl transition-all group-hover:bg-red-500/20" />
                                <div className="relative">
                                    <div className="mb-4 inline-flex rounded-xl bg-red-100 p-3 dark:bg-red-950/50">
                                        <Wrench className="h-8 w-8 text-red-600 dark:text-red-500" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                                        Histórico Completo
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Mantenha um registro detalhado de todas as
                                        manutenções, reparos e serviços realizados.
                                    </p>
                                </div>
                            </Card>

                            {/* Feature 6 */}
                            <Card className="group relative overflow-hidden border-2 border-gray-200/50 bg-white p-8 transition-all hover:scale-105 hover:border-indigo-500/50 hover:shadow-xl dark:border-gray-800/50 dark:bg-gray-900/50 dark:hover:border-indigo-500/50">
                                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-indigo-500/10 blur-2xl transition-all group-hover:bg-indigo-500/20" />
                                <div className="relative">
                                    <div className="mb-4 inline-flex rounded-xl bg-indigo-100 p-3 dark:bg-indigo-950/50">
                                        <Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-500" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                                        Dados Seguros
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Seus dados financeiros e informações do
                                        veículo protegidos com criptografia de ponta.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 px-6 py-20 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-8 text-center md:grid-cols-3">
                            <div>
                                <div className="mb-2 text-5xl font-black text-white md:text-6xl">
                                    R$ 2.4K
                                </div>
                                <div className="text-lg font-medium text-blue-100">
                                    Economia média anual
                                </div>
                            </div>
                            <div>
                                <div className="mb-2 text-5xl font-black text-white md:text-6xl">
                                    15K+
                                </div>
                                <div className="text-lg font-medium text-blue-100">
                                    Usuários ativos
                                </div>
                            </div>
                            <div>
                                <div className="mb-2 text-5xl font-black text-white md:text-6xl">
                                    98%
                                </div>
                                <div className="text-lg font-medium text-blue-100">
                                    Taxa de satisfação
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="px-6 py-20 lg:px-8 lg:py-32">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-16 text-center">
                            <Badge
                                variant="outline"
                                className="mb-4 border-blue-500/50 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/30 dark:text-blue-400"
                            >
                                Como Funciona
                            </Badge>
                            <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">
                                Simples e rápido
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                                Comece a gerenciar seu veículo em 3 passos simples
                            </p>
                        </div>

                        <div className="grid gap-12 md:grid-cols-3">
                            <div className="relative text-center">
                                <div className="mb-6 flex justify-center">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-3xl font-black text-white shadow-lg shadow-blue-500/30">
                                        1
                                    </div>
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                                    Cadastre seu Veículo
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Adicione as informações básicas do seu carro em
                                    menos de 2 minutos.
                                </p>
                            </div>

                            <div className="relative text-center">
                                <div className="mb-6 flex justify-center">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-3xl font-black text-white shadow-lg shadow-purple-500/30">
                                        2
                                    </div>
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                                    Registre seus Gastos
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Adicione despesas e acompanhe automaticamente seus
                                    custos mensais.
                                </p>
                            </div>

                            <div className="relative text-center">
                                <div className="mb-6 flex justify-center">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-3xl font-black text-white shadow-lg shadow-green-500/30">
                                        3
                                    </div>
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                                    Receba Insights
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Visualize análises, alertas e tome decisões
                                    inteligentes sobre seu veículo.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="px-6 py-20 lg:px-8">
                    <div className="mx-auto max-w-5xl">
                        <Card className="relative overflow-hidden border-2 border-gray-200/50 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 p-12 dark:border-gray-800/50 lg:p-16">
                            <div className="absolute top-0 right-0 h-64 w-64 translate-x-20 -translate-y-20 rounded-full bg-white/10 blur-3xl" />
                            <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-20 translate-y-20 rounded-full bg-white/10 blur-3xl" />

                            <div className="relative text-center">
                                <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
                                    Pronto para começar?
                                </h2>
                                <p className="mb-8 text-xl text-blue-100">
                                    Junte-se a milhares de motoristas que já estão
                                    economizando e gerenciando melhor seus veículos.
                                </p>
                                {!auth.user && canRegister && (
                                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                        <Link href={register()}>
                                            <Button
                                                size="lg"
                                                className="h-14 bg-white px-8 text-lg font-semibold text-blue-700 shadow-lg transition-all hover:scale-105 hover:bg-gray-50 hover:shadow-xl"
                                            >
                                                Criar Conta Grátis
                                                <CheckCircle2 className="ml-2 h-5 w-5" />
                                            </Button>
                                        </Link>
                                        <Link href={login()}>
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                className="h-14 border-2 border-white bg-transparent px-8 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-white/10"
                                            >
                                                Já tenho conta
                                            </Button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </Card>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-gray-200 bg-white px-6 py-12 dark:border-gray-800 dark:bg-[#0a0a0a] lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-8 md:grid-cols-4">
                            <div>
                                <div className="mb-4 flex items-center gap-2">
                                    <Car className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                                        CarTrack
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Gestão inteligente para o seu veículo.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                                    Produto
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <li>
                                        <a
                                            href="#"
                                            className="transition-colors hover:text-blue-600 dark:hover:text-blue-500"
                                        >
                                            Funcionalidades
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="transition-colors hover:text-blue-600 dark:hover:text-blue-500"
                                        >
                                            Preços
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="transition-colors hover:text-blue-600 dark:hover:text-blue-500"
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                                    Empresa
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <li>
                                        <a
                                            href="#"
                                            className="transition-colors hover:text-blue-600 dark:hover:text-blue-500"
                                        >
                                            Sobre
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="transition-colors hover:text-blue-600 dark:hover:text-blue-500"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="transition-colors hover:text-blue-600 dark:hover:text-blue-500"
                                        >
                                            Contato
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                                    Legal
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <li>
                                        <a
                                            href="#"
                                            className="transition-colors hover:text-blue-600 dark:hover:text-blue-500"
                                        >
                                            Privacidade
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="transition-colors hover:text-blue-600 dark:hover:text-blue-500"
                                        >
                                            Termos
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="transition-colors hover:text-blue-600 dark:hover:text-blue-500"
                                        >
                                            Licença
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
                            <p>
                                © {new Date().getFullYear()} CarTrack. Todos os
                                direitos reservados.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
