import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function useEncontrarDiarista() {
    const [cepAutomatico, setCepAutomatico] = useState(''),
        [coordenadas, setCoordenadas] = useState<{
            latitude: number;
            longitude: number;
        }>();

    useEffect(() => {
        (async () => {
            try {
                const gpsPermitido = await pedirPermissao();
                if (gpsPermitido) {
                    setCoordenadas(await pegarCoordenadas());
                }
            } catch (error) {}
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                if (coordenadas) {
                    setCepAutomatico(await pegarCep());
                }
            } catch (error) {}
        })();
    }, [coordenadas]);

    async function pedirPermissao(): Promise<boolean> {
        try {
            const {
                status,
            } = await Location.requestForegroundPermissionsAsync();
            return status === 'granted';
        } catch (error) {
            return false;
        }
    }

    async function pegarCoordenadas(): Promise<{
        latitude: number;
        longitude: number;
    }> {
        const localizacao = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Highest,
        });

        return localizacao.coords;
    }

    async function pegarCep(): Promise<string> {
        if (coordenadas) {
            const endereco = await Location.reverseGeocodeAsync(coordenadas);
            if (endereco.length > 0) {
                return endereco[0].postalCode || '';
            }
        }
        return '';
    }

    return {
        cepAutomatico,
    };
}
