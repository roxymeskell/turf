/// <reference types="geojson" />

type Feature = GeoJSON.Feature<any> | GeoJSON.GeometryObject

/**
 * http://turfjs.org/docs/#boolean-within
 */
export default function (feature1: Feature, feature2: Feature): boolean;
