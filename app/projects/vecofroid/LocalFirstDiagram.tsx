import { User, Smartphone, Wifi, Server, ArrowRight } from "lucide-react";

export default function LocalFirstDiagram() {
  return (
    <div className="flex flex-col items-center gap-6 my-8">
      <div className="flex flex-row items-center gap-4">
        {/* Utilisateur */}
        <div className="flex flex-col items-center">
          <User className="w-10 h-10 text-blue-600" />
          <span className="text-xs mt-1 text-gray-700 text-center">Utilisateur<br />Crée/modifie</span>
        </div>
        <ArrowRight className="w-6 h-6 text-gray-400" />
        {/* Appareil (stockage local) */}
        <div className="flex flex-col items-center">
          <Smartphone className="w-10 h-10 text-green-600" />
          <span className="text-xs mt-1 text-gray-700 text-center">Appareil<br />Stockage local<br />(même hors-ligne)</span>
        </div>
        <ArrowRight className="w-6 h-6 text-gray-400" />
        {/* Synchronisation */}
        <div className="flex flex-col items-center">
          <Wifi className="w-10 h-10 text-yellow-500" />
          <span className="text-xs mt-1 text-gray-700 text-center">Connexion détectée<br />Synchronisation</span>
        </div>
        <ArrowRight className="w-6 h-6 text-gray-400" />
        {/* Serveur */}
        <div className="flex flex-col items-center">
          <Server className="w-10 h-10 text-purple-600" />
          <span className="text-xs mt-1 text-gray-700 text-center">Serveur<br />Données à jour</span>
        </div>
      </div>
    </div>
  );
} 